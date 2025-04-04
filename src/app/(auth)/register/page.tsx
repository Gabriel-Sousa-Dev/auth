'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const RegisterFormSchema = z.object({
    fullname: z.string({
        required_error: 'Nome completo é obrigatorio'
    })
        .min(5, 'O nome deve ter no minimo 5 letras'),

    email: z.string({
        required_error: 'Email é obrigatorio'
    })
        .email("Digite um email válido"),

    password: z.string({
        required_error: 'Senha é obrigatorio'
    })
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
        .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
        .regex(/[!@#$%^&*()_+{}[\]:;<>,.?~\\\/\-]/, 'A senha deve conter pelo menos um caractere especial'),

    telephone: z.string({
        required_error: 'Telefone é obrigatorio'
    })
        .min(15, 'Digite o número completo')
        .max(15, 'Número inválido')
        .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Formato inválido. Ex: (11) 98765-4321')
})

export default function Page(){
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            email: '',
            fullname: '',
            password: '',
            telephone: ''
        }
    })

    async function handleSubmit(values: z.infer<typeof RegisterFormSchema>) {
        try {

            // TODO: Logica de criar usuário

            toast.success('Usuário criado com sucesso')
            router.push('/') // TODO: redirecione para uma rota
        } catch (e) {
            toast.error('Ocorreu um erro inesperado ao criar um novo usuário')
            console.error('Ocorreu um erro inesperado ao criar um novo usuário', e) 
        }
    }

    return (
        <div className="max-w-md w-full pt-6 pb-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-8 md:px-10 text-gray-400 rounded-[10px]">
            <h1 className="text-2xl text-center font-semibold mb-6">Registro</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className="flex flex-col gap-5 mb-12">
                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome completo:</FormLabel>
                                    <FormControl>
                                        <Input type="text" className="text-primary" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl>
                                        <Input type="email" className="text-primary" {...field} />
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
                                    <FormLabel>Senha:</FormLabel>
                                    <FormControl>
                                        <Input type="password" className="text-primary" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="telephone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefone:</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            className="text-primary"
                                            value={field.value}
                                            onChange={(e) => {
                                                const rawValue = e.target.value.replace(/\D/g, '').slice(0, 11);

                                                let masked = rawValue;
                                                masked = rawValue
                                                    .replace(/^(\d{2})(\d)/, '($1) $2')
                                                    .replace(/(\d{5})(\d)/, '$1-$2');
                                                
                                                field.onChange(masked)
                                            }}    
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button size='full' variant='primary' type="submit">
                        Registrar
                    </Button>
                </form>
            </Form>
        </div>
    )
}