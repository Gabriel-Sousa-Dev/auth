"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const NewPasswordFormSchema = z.object({
    newPassword: z.string({
        required_error: 'Senha é obrigatorio'
    })
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
        .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
        .regex(/[!@#$%^&*()_+{}[\]:;<>,.?~\\\/\-]/, 'A senha deve conter pelo menos um caractere especial'),

    confirmPassword: z.string({
        required_error: 'Confirmar a senha é obrigatorio'
    })
})
    .refine((data) => data.newPassword === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas não coincidem",
    });

export default function Page(){
    const form = useForm({
        resolver: zodResolver(NewPasswordFormSchema),
        defaultValues: {
            newPassword: '',
            confirmPassword: ''
        }
    })

    function handleSubmit(values: z.infer<typeof NewPasswordFormSchema>) {
        try {
            console.log(values)
            // TODO: Logica de troca de senha
        } catch (e) {
            toast.error('Ocorreu um erro inesperado ao trocar de senha')
            console.error('Ocorreu um erro inesperado ao trocar de senha', e)
        }
    }

    return (
        <div className="bg-black max-w-lg w-full px-5 pt-5 pb-20 rounded-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">
            <h1 className="text-2xl mb-12 text-center font-semibold">Insira sua nova senha!</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className="flex flex-col gap-10 mb-11">
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nova senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" className="text-primary" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Repetir nova senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" className="text-primary" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button variant='primary' size='full' type="submit">
                        Registrar nova senha
                    </Button>
                </form>
            </Form>
        </div>
    )
}