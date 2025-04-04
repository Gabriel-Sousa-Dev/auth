import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page(){

    /*
        criar componente de input field
    */

    return (
        <div className="bg-black max-w-lg w-full px-5 pt-5 pb-20 rounded-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">
            <h1 className="text-2xl mb-12 text-center font-semibold">Insira sua nova senha!</h1>

            <div className="flex flex-col gap-10 mb-11">
                <div className="flex flex-col gap-2">
                    <Label>Nova Senha</Label>
                    <Input type="password" />
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Repetir senha nova</Label>
                    <Input type="password" />
                </div>
            </div>

            <Button variant='primary' size='full'>
                Registrar nova senha
            </Button>
        </div>
    )
}