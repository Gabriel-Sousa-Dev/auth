"use client"
import { GetModulesFromUser } from "@/actions/user/GetModulesFromUser";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string({
    required_error: 'Nome Obrigatorio'
  })
    .email('Digite um email válido')
    .min(2, 'O nome deve ter no mínimo 2 letras'),

  password: z.string({
    required_error: 'Senha obrigátoria'
  })
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    .regex(/[!@#$%^&*()_+{}[\]:;<>,.?~\\\/\-]/, 'A senha deve conter pelo menos um caractere especial')
})

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { signIn } = useAuth()
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function handleSubmit(values: z.infer<typeof LoginFormSchema>) {
    // TODO: Talvez tenha como tirar o Try/Catch daqui, o Sign não usa nada desse tipo
    try {
      setIsLoading(true)
      const successful = await signIn({
        password: values.password,
        email: values.email
      })

      if (!successful) {
        throw new Error("LOGIN_FAILED")
      }

      const token = localStorage.getItem('token')

      if (!token) {
        throw new Error('TOKEN_NOT_EXIST')
      }
      const tokenData = jwtDecode<JwtPayload & {id: string, role: RoleEnum, companyId: string}>(token)
    
      const redirectMap: Record<SystemModules, string> = {
        order: "/orders/orders",
        kitchen: "/kitchen",
        product: "/stock",
        checkout: "/checkout"
      }

      switch (tokenData.role) {
        case "ADMIN": 
          window.location.href = '/admin'
          break

        case "COMPANY":
          window.location.href = '/company'
          break

        case "EMPLOYEE":
          const userModules = await GetModulesFromUser(token)
          if (userModules.data.length === 0) {
            toast.warning('Não há nenhum módulo atribuido a esse funcionário!')
            return
          }
        
          const userMainModule = userModules.data[0].name
          const pathToRedirect = redirectMap[userMainModule]

          if (!pathToRedirect) {
            throw new Error('REDIRECT_PATH_NOT_FOUND')
          }

          toast.success('Login efetuado com sucesso')
          window.location.href = pathToRedirect
          return
          break
        
        default:
          toast.error('Tipo de usuário não reconhecido pelo sistema')
          console.error('Tipo de usuário não reconhecido pelo sistema: ', tokenData.role)
          return
      }
    } catch (e) {
      console.error(e);
      // TODO: reformular o catch
      const errorMap: Record<string, string> = {
        'LOGIN_FAILED': "Ocorreu um erro inesperado ao fazer login.",
        'TOKEN_NOT_EXIST': "Autenticação necessária. Por favor, entre com seus dados novamente.",
        'REDIRECT_PATH_NOT_FOUND': "Ocorreu um erro ao fazer o redirecionamento"
      }

      if (e instanceof Error) {
        toast.error(errorMap[e.message] ?? errorMap.LOGIN_FAILED)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-6 bg-black rounded-lg pt-20 pb-32 max-w-md w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">
      <h1 className="text-2xl mb-7 text-center font-semibold">Login</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>

          <div className="flex flex-col gap-6">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" spellCheck='false' className="text-primary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" className="text-black" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="primary" size='full' type="submit" disabled={isLoading}>
              { isLoading ? 'Carregando' : 'Entrar' }
            </Button>

            {/* <Link href='forgot-password' className="hover:underline">Esqueceu a senha?</Link> */}
          </div>

        </form>

      </Form>

      
    </div>
  );
}
