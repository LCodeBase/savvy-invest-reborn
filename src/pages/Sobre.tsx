
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Sobre o InvestSavy
            </h1>
            <p className="text-xl text-white/90 animate-fade-in animate-delay-100">
              Conheça nossa história, missão, valores e a equipe por trás do InvestSavy
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Fundada em 2010 por um grupo de especialistas em finanças apaixonados por educação financeira, o InvestSavy nasceu com um propósito claro: desmistificar o mundo dos investimentos e torná-lo acessível para todos.
                </p>
                <p>
                  Percebemos que muitas pessoas deixavam de investir ou tomavam decisões financeiras equivocadas por falta de conhecimento claro e objetivo. Por isso, dedicamos nossa missão a educar e orientar investidores de todos os níveis de experiência.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossa atuação para além da educação financeira, oferecendo serviços de consultoria, análises de mercado e ferramentas práticas para nossos usuários.
                </p>
                <p>
                  Hoje, o InvestSavy é reconhecido como uma das principais plataformas de educação financeira e investimentos do Brasil, ajudando milhares de pessoas a construírem um futuro financeiro mais próspero.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8659d8bde068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Equipe InvestSavy" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-lg text-white">
                <p className="text-3xl font-bold">2010</p>
                <p className="font-medium">Ano de fundação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Missão, Visão e Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os princípios que guiam nosso trabalho e nosso compromisso com nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl mb-4">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Missão</h3>
                </div>
                <p className="text-center">
                  Capacitar pessoas a tomarem decisões financeiras inteligentes através de educação, ferramentas e consultoria de qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in animate-delay-100">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl mb-4">
                    👁️
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Visão</h3>
                </div>
                <p className="text-center">
                  Ser a principal referência em educação financeira no Brasil, ajudando milhões de pessoas a conquistarem independência financeira.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in animate-delay-200">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl mb-4">
                    ⭐
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Valores</h3>
                </div>
                <ul className="text-center space-y-2">
                  <li>Transparência</li>
                  <li>Excelência</li>
                  <li>Integridade</li>
                  <li>Inovação</li>
                  <li>Compromisso com o cliente</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os profissionais dedicados que fazem o InvestSavy acontecer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: "Carlos Souza",
                role: "CEO e Fundador",
                bio: "Com mais de 20 anos de experiência no mercado financeiro, Carlos lidera nossa equipe com visão e determinação.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Ana Oliveira",
                role: "Diretora de Educação Financeira",
                bio: "Especialista em ensinar conceitos financeiros complexos de forma simples e aplicável.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Ricardo Lima",
                role: "Analista Chefe",
                bio: "Com olhar aguçado para tendências de mercado, Ricardo lidera nossa equipe de análise.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Patrícia Santos",
                role: "Consultora Financeira",
                bio: "Especializada em planejamento financeiro personalizado para diferentes perfis de investidores.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, i) => (
              <Card key={i} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${(i+1)*100}ms` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary/80 font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">InvestSavy em Números</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Resultados que comprovam nossa excelência
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "10+",
                label: "Anos de experiência"
              },
              {
                number: "5.000+",
                label: "Clientes satisfeitos"
              },
              {
                number: "150+",
                label: "Cursos e materiais"
              },
              {
                number: "97%",
                label: "Taxa de satisfação"
              }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6">
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-lg text-primary-foreground/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sobre;
