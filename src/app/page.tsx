import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Globe,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatsAppCTA } from "@/components/WhatsAppCTA/WhatsAppCTA"
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 p-3 sm:p-8 bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
          <img src="/logo.png" className="w-[150px] object-cover" />
          </div>
          <nav className="hidden md:flex items-center gap-6"> 
            <Link href="#recursos" className="text-sm font-medium hover:underline underline-offset-4">
              Recursos
            </Link>
            <Link href="#precos" className="text-sm font-medium hover:underline underline-offset-4">
              Preços
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:underline underline-offset-4">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
     
            <Link href="#cadastro">
              <Button size="sm" variant="primary">Começar Grátis</Button>
            </Link>
            <Link href="/login">
              <Button size="sm" variant="primary">Login</Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                {/* <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Lançamento Especial
                </div> */}
                <h1 className="text-3x font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                  Simplifique seu trabalho com nossa solução MicroSaaS
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Automatize tarefas, economize tempo e aumente sua produtividade com nossa plataforma intuitiva e
                  acessível.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#cadastro" className="w-full min-[400px]:w-auto">
                    <Button size="lg" variant="primary" className="w-full min-[400px]:w-auto gap-1">
                      Comece Agora
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#demo" className="w-full min-[400px]:w-auto">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Ver Demonstração
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  <span>Teste grátis por 14 dias</span>
                  <span className="mx-2 hidden sm:inline">•</span>
                  <div className="flex items-center gap-2 sm:inline-flex">
                    <CheckCircle2 className="h-4 w-4 text-primary sm:hidden" />
                    <span>Sem necessidade de cartão de crédito</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[250px] w-full sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px]">
                  <Image
                    src="/landingpage.png"
                    alt="Dashboard do MicroSaaS"
                    fill
                    className="object-contain rounded-lg border  border-none"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-800/50 dark:bg-slate-800/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Utilizado por empresas</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src="/laburguer.png"
                      alt={`Logo da empresa ${i}`}
                      width={120}
                      height={40}
                      className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-600/10 px-3 py-1 text-sm text-purple-600">Recursos</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Tudo que você precisa em um só lugar
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma oferece todas as ferramentas necessárias para otimizar seu fluxo de trabalho e
                  aumentar sua produtividade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <LayoutDashboard className="h-10 w-10 text-purple-600" />,
                  title: "Dashboard Intuitivo",
                  description: "Interface amigável que facilita o gerenciamento de todas as suas tarefas e projetos.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-purple-600" />,
                  title: "Acesso em Qualquer Lugar",
                  description: "Acesse sua conta de qualquer dispositivo, a qualquer momento, em qualquer lugar.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-purple-600" />,
                  title: "Segurança Avançada",
                  description: "Seus dados estão protegidos com criptografia de ponta e medidas de segurança robustas.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
                  title: "Suporte 24/7",
                  description: "Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana.",
                },
                {
                  icon: <CreditCard className="h-10 w-10 text-purple-600" />,
                  title: "Pagamento Flexível",
                  description: "Opções de pagamento flexíveis que se adaptam às necessidades do seu negócio.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-purple-600" />,
                  title: "Atualizações Constantes",
                  description: "Melhorias e novos recursos são adicionados regularmente sem custo adicional.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:border-gray-800"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precos" className="w-full py-12 md:py-24 lg:py-32 bg-slate-800/50 dark:bg-slate-800/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-600/10 px-3 py-1 text-sm text-purple-600">Preços</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Planos simples e transparentes
                </h2>
              </div>
            </div>
            <div className="flex justify-center p-8">
              {[
                {
                  name: "Empresarial",
                  price: "R$299,90",
                  description: "Para qualquer empresa",
                  features: [
                    "Suporte 24/7 dedicado",
                    "Treinamento personalizado",
                    "API completa",
                    "Segurança avançada",
                  ],
                  cta: "Fale com Vendas",
                  popular: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col rounded-lg border p-6 shadow-sm dark:border-gray-800 ${
                    plan.popular ? "border-primary ring-1 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Mais Popular
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      {plan.price}
                      <span className="ml-1 text-xl font-medium text-muted-foreground">/mês</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        {plan.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-600/10 px-3 py-1 text-sm text-purple-600">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  O que nossos clientes dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja como nossa solução tem ajudado empresas a crescer e se destacar.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 ">
              {[
                {
                  quote:
                    "Esta plataforma revolucionou a forma como gerenciamos nossos projetos. Economizamos horas de trabalho todas as semanas.",
                  author: "Franciele Botelho",
                  role: "CEO",
                  avatar: "/franciele.png",
                },
          
              ].map((testimonial, i) => (
                <div key={i} className="flex flex-col rounded-lg border p-6 shadow-sm dark:border-gray-800">
                  <div className="flex-1">
                    <p className="text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`Foto de ${testimonial.author}`}
                      width={60}
                      height={60}
                      className="rounded-full dark:bg-gray-800"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-slate-800/50 dark:bg-slate-800/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-600/10 px-3 py-1 text-sm text-purple-600">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Perguntas Frequentes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Respostas para as dúvidas mais comuns sobre nossa plataforma.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              {[
                {
                  question: "Como funciona o período de teste gratuito?",
                  answer:
                    "Oferecemos um período de teste gratuito de 14 dias para todos os nossos planos. Você pode experimentar todos os recursos sem compromisso e sem necessidade de cartão de crédito.",
                },
                {
                  question: "Posso mudar de plano a qualquer momento?",
                  answer:
                    "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor imediatamente e o valor é ajustado proporcionalmente.",
                },
                {
                  question: "Como funciona o suporte ao cliente?",
                  answer:
                    "Oferecemos suporte por email para todos os planos. Os planos Profissional e Empresarial têm acesso a suporte prioritário e o plano Empresarial inclui suporte 24/7 dedicado.",
                },
                {
                  question: "Vocês oferecem descontos para ONGs ou instituições educacionais?",
                  answer:
                    "Sim, oferecemos descontos especiais para organizações sem fins lucrativos, instituições educacionais e startups em estágio inicial. Entre em contato com nossa equipe de vendas para mais informações.",
                },
                {
                  question: "Meus dados estão seguros na plataforma?",
                  answer:
                    "Absolutamente. Utilizamos criptografia de ponta a ponta, backups regulares e seguimos as melhores práticas de segurança da indústria para garantir que seus dados estejam sempre protegidos.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border p-6 shadow-sm dark:border-gray-800">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cadastro" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Pronto para transformar seu negócio?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comece agora e descubra como nossa plataforma pode ajudar você a alcançar seus objetivos.
                </p>
              </div>
              <WhatsAppCTA />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
          <img src="/logo.png" className="w-[100px]" alt="Imagem com 'Turbo Sales' escrito e um simbolo de código ao lado."/>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Termos de Serviço
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Sobre Nós
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Contato
            </Link>
          </nav>
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TchêComp. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
