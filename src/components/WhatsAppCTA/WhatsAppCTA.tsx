// components/WhatsAppCTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WhatsAppCTA() {
  const handleClick = () => {
    const name = (document.getElementById('user-name') as HTMLInputElement)?.value || 'Cliente';
    const message = `Olá, meu nome é ${name}, estou interessado no sistema Kitchê, quero saber mais!`;
    const whatsappUrl = `https://wa.me/+555184363373?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="mx-auto w-full max-w-sm space-y-2">
      <div className="flex flex-col gap-2">
        <Input 
          type="text" 
          placeholder="Seu nome completo" 
          className="w-full dark:text-gray-300" 
          id="user-name"
        />
        <Button 
          type="button" 
          variant="primary"
          size="lg" 
          className="w-full"
          onClick={handleClick}
        >
          Quero saber mais
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Ao clicar, você será redirecionado para nosso WhatsApp
      </p>
    </div>
  );
}