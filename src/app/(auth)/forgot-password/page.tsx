import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page(){
    return(
        <div className="bg-black rounded-[10px] max-w-lg w-full text-gray-400 px-8 md:px-10 pt-5 pb-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl mb-14 text-center font-semibold">Esqueceu a senha?</h1>

            <div className="flex flex-col gap-2 mb-6">
                <Label>Email</Label>
                <Input />
            </div>

            <p className="mb-12 w-3/4 text-md">Enviaremos um código de verificação </p>

            <Button variant='primary' size='full'>Enviar código de verificação</Button>
        </div>
    )
}