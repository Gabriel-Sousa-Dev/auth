"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ForgotPasswordSchema = z.object({
    email: z.string({
        required_error: 'Email é obrigatório'
    })
        .email('Digite um email válido')
})

export default function Page(){
    const form = useForm({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: ''
        }
    })

    async function handleSubmit(values: z.infer<typeof ForgotPasswordSchema>) {
        try {
            console.log(values)
            // TODO: Logica de Pedir por uma troca de senha
        } catch (e) {
            toast.error('Ocorreu um erro inesperado ao pedir a troca da senha')
            console.error('Ocorreu um erro inesperado ao criar um novo usuário', e) 
        } 
    }

    return(
        <div className="bg-black rounded-[10px] max-w-lg w-full text-gray-400 px-8 md:px-10 pt-5 pb-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl mb-14 text-center font-semibold">Esqueceu a senha?</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="mb-6">
                                <FormLabel>Email:</FormLabel>
                                <FormControl>
                                    <Input type="email" className="text-primary" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <p className="mb-12 w-3/4 text-md">Enviaremos um código de verificação </p>

                    <Button variant='primary' size='full' type="submit">Enviar código de verificação</Button>
                </form>

            </Form>
        </div>
    )
}