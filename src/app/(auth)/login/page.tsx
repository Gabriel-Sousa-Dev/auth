import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-6 bg-black rounded-lg pt-20 pb-32 max-w-md w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">
      <h1 className="text-2xl mb-7 text-center font-semibold">Login</h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Label>Email</Label>
          <Input type="email" spellCheck='false' className="text-primary"/>
        </div>

        <div className="flex flex-col gap-1">
          <Label>Senha</Label>
          <Input type="password"  className="text-black"/>
        </div>

        <Button variant="primary" size='full'>
          Entrar
        </Button>

        <Link href='forgot-password' className="hover:underline">Esqueceu a senha?</Link>
      </div>
    </div>
  );
}
