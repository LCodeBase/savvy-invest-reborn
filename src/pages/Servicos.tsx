
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesList = [
  {
    id: "consultoria",
    title: "Consultoria Financeira",
    description: "Oferecemos consultoria personalizada para ajudar você a atingir seus objetivos financeiros.",
    details: "Nossa consultoria financeira é personalizada para atender às suas necessidades específicas. Trabalharemos com você para entender seus objetivos, analisar sua situação atual e desenvolver um plano que maximize seus resultados financeiros.",
    features: [
      "Análise completa da sua situação financeira",
      "Plano de investimentos personalizado",
      "Estratégias de diversificação de carteira",
      "Acompanhamento periódico dos resultados",
      "Recomendações ajustadas ao seu perfil de risco"
    ],
    icon: "👨‍💼",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "educacao",
    title: "Educação Financeira",
    description: "Cursos e materiais para ampliar seu conhecimento sobre finanças e investimentos.",
    details: "Nossos programas de educação financeira são desenvolvidos para todos os níveis de conhecimento. Desde conceitos básicos até estratégias avançadas de investimento, oferecemos conteúdo de qualidade para você aprender no seu próprio ritmo.",
    features: [
      "Cursos online com certificado",
      "Materiais didáticos exclusivos",
      "Webinars com especialistas",
      "Comunidade de aprendizado",
      "Simuladores práticos de investimentos"
    ],
    icon: "📚",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "analise",
    title: "Análise de Mercado",
    description: "Análises detalhadas sobre tendências de mercado e oportunidades de investimento.",
    details: "Nossa equipe de analistas experientes monitora constantemente o mercado para identificar tendências e oportunidades. Entregamos análises aprofundadas e recomendações baseadas em dados para apoiar suas decisões de investimento.",
    features: [
      "Relatórios semanais de mercado",
      "Análises setoriais detalhadas",
      "Alertas de oportunidades de investimento",
      "Avaliação de riscos e cenários",
      "Cobertura de mercados nacionais e internacionais"
    ],
    icon: "📊",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "planejamento",
    title: "Planejamento Financeiro",
    description: "Elaboração de planos financeiros completos para curto, médio e longo prazo.",
    details: "Nosso serviço de planejamento financeiro ajuda você a organizar suas finanças e criar uma estratégia para alcançar seus objetivos. Abordamos desde a organização do orçamento até o planejamento da aposentadoria.",
    features: [
      "Organização de orçamento pessoal ou familiar",
      "Estratégias para redução de dívidas",
      "Plano para objetivos financeiros específicos",
      "Planejamento de aposentadoria",
      "Proteção patrimonial e seguros"
    ],
    icon: "📝",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  }
];

const Servicos = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Nossos Serviços
            </h1>
            <p className="text-xl text-white/90 animate-fade-in animate-delay-100">
              Conheça as soluções que oferecemos para ajudar você a alcançar seus objetivos financeiros
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções para cada etapa da sua jornada financeira</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No InvestSavy, entendemos que cada pessoa tem necessidades financeiras únicas. 
              Por isso, oferecemos uma gama completa de serviços que podem ser adaptados ao seu perfil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, i) => (
              <Card key={service.id} className="animate-fade-in" style={{ animationDelay: `${i*100}ms` }}>
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`#${service.id}`}>Saiba Mais</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="section bg-secondary/50">
        <div className="container">
          <Tabs defaultValue="consultoria" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8">
              {servicesList.map((service) => (
                <TabsTrigger key={service.id} value={service.id} id={service.id}>
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {servicesList.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg mb-6">{service.details}</p>
                    <div className="space-y-4 mb-6">
                      <h4 className="text-xl font-semibold">O que incluímos:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button>Solicitar este serviço</Button>
                  </div>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-lg w-full object-cover h-[400px]"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Trabalhamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso processo é simples e transparente, sempre focado em entregar os melhores resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description: "Começamos com uma análise completa da sua situação financeira atual e dos seus objetivos."
              },
              {
                step: "02",
                title: "Planejamento",
                description: "Desenvolvemos um plano de ação personalizado com estratégias específicas para suas necessidades."
              },
              {
                step: "03",
                title: "Implementação e Acompanhamento",
                description: "Colocamos o plano em prática e monitoramos os resultados, fazendo ajustes quando necessário."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-bold text-primary/10 absolute -top-10 left-0">
                  {step.step}
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">O que nossos clientes dizem</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Os serviços de consultoria financeira do InvestSavy transformaram minha relação com o dinheiro. Hoje tenho clareza sobre meus investimentos e me sinto seguro para tomar decisões.",
                author: "Roberto Almeida",
                role: "Empresário"
              },
              {
                quote: "O curso de educação financeira foi um divisor de águas na minha vida. O conteúdo é prático e aplicável, e os resultados são visíveis no meu orçamento.",
                author: "Carla Mendes",
                role: "Professora"
              },
              {
                quote: "As análises de mercado são completas e me ajudam a entender os movimentos econômicos. Isso tem feito toda a diferença nas minhas decisões de investimento.",
                author: "Lucas Ferreira",
                role: "Engenheiro"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg">
                <div className="text-2xl mb-4">"</div>
                <p className="mb-6 text-primary-foreground">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/80">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco hoje mesmo para uma consultoria inicial gratuita 
              e descubra como podemos ajudar a atingir seus objetivos financeiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Solicitar Consultoria</Button>
              <Button variant="outline" size="lg">Ver Todos os Serviços</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Servicos;
