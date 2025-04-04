"use client"
import { Login } from "@/actions/user/Login";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function handleSubmit(values: z.infer<typeof LoginFormSchema>) {
    try {
      const token = await Login({
        email: values.email,
        password: values.password
      })

      // TODO: lógica de autenticação

      toast.success('Login efetuado com sucesso')
    } catch (e) {
      const errorMap: Record<string, string> = {
        'LOGIN_FAILED': "Ocorreu um erro inesperado ao fazer login.",
        'INVALID_CREDENTIALS': "Email ou senha invalidos."
      }

      if (e instanceof Error) {
        toast.error(errorMap[e.message] ?? errorMap.LOGIN_FAILED)
      }
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

            <Button variant="primary" size='full' type="submit">
              Entrar
            </Button>

            <Link href='forgot-password' className="hover:underline">Esqueceu a senha?</Link>
          </div>

        </form>

      </Form>

      
    </div>
  );
}
