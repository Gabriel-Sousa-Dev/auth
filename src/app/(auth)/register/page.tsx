import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page(){
    return (
        <div className="max-w-md w-full pt-6 pb-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-8 md:px-10 text-gray-400 rounded-[10px]">
            <h1 className="text-2xl text-center font-semibold mb-6">Registro</h1>

            <div className="flex flex-col gap-5 mb-12">
                <div className="flex flex-col gap-2">
                    <Label>Nome completo</Label>
                    <Input type="text"/>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Email</Label>
                    <Input type="email"/>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Senha</Label>
                    <Input type="password"/>
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Telefone</Label>
                    <Input />
                </div>
            </div>

            <Button size='full' variant='primary'>
                Registrar
            </Button>
        </div>
    )
}