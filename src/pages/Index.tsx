
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, BookOpen, TrendingUp, CheckCircle, BarChart3, LineChart, Calculator } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Investir com <span className="text-accent">inteligência</span> é o caminho para o sucesso financeiro
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                O InvestSavy te ajuda a entender o mundo dos investimentos e a tomar decisões financeiras inteligentes.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                  Comece Agora
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative animate-fade-in animate-delay-300">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-foreground/30 rounded-full blur-3xl"></div>
              <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Pessoa analisando gráficos financeiros" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm animate-fade-in">Por que escolher o InvestSavy</span>
            <h2 className="section-heading text-center mx-auto after:mx-auto mt-3 animate-fade-in animate-delay-100">Nossa abordagem diferenciada</h2>
            <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
              O InvestSavy combina experiência, tecnologia e educação para oferecer a melhor consultoria financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultoria Personalizada",
                description: "Análise detalhada do seu perfil e objetivos para recomendações personalizadas",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Objetivos Claros",
                description: "Definimos metas alcançáveis e monitoramos constantemente o progresso",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Educação Contínua",
                description: "Acesso a conteúdo educacional para aprimorar seus conhecimentos",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "Análise de Tendências",
                description: "Monitoramento constante do mercado para identificar as melhores oportunidades",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Transparência Total",
                description: "Comunicação clara e transparente em todas as etapas do processo",
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                title: "Resultados Comprovados",
                description: "Histórico de sucesso com mais de 5.000 clientes satisfeitos",
                icon: <BarChart3 className="w-6 h-6" />
              }
            ].map((feature, i) => (
              <div key={i} className="service-card animate-fade-in" style={{ animationDelay: `${(i+2)*100}ms` }}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm animate-fade-in">Nossos Serviços</span>
            <h2 className="section-heading text-center mx-auto after:mx-auto mt-3 animate-fade-in animate-delay-100">Como podemos ajudar você</h2>
            <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
              Oferecemos uma variedade de serviços para ajudar você a alcançar seus objetivos financeiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultoria Financeira",
                description: "Consultoria personalizada para seus objetivos financeiros de curto, médio e longo prazo",
                icon: "👨‍💼"
              },
              {
                title: "Análise de Mercado",
                description: "Análises detalhadas sobre tendências de mercado e oportunidades de investimento",
                icon: "📊"
              },
              {
                title: "Educação Financeira",
                description: "Cursos e materiais para ampliar seu conhecimento financeiro e tomar decisões mais seguras",
                icon: "📚"
              }
            ].map((service, i) => (
              <Card key={i} className="border-none shadow-lg relative overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${(i+2)*100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-0"></div>
                <CardHeader className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link to="/servicos">
                    <Button variant="outline" className="group">
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button size="lg" className="group">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm animate-fade-in">Fique Informado</span>
            <h2 className="section-heading text-center mx-auto after:mx-auto mt-3 animate-fade-in animate-delay-100">Últimas Notícias</h2>
            <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
              Fique por dentro das principais notícias do mercado financeiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Novas tendências de investimento para 2025",
                description: "Confira as tendências de investimento que estão dominando o mercado neste ano",
                date: "15 de Maio, 2025",
                image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
              },
              {
                title: "Como a inteligência artificial está transformando o mercado financeiro",
                description: "Descubra como a IA está revolucionando a análise e as decisões de investimento",
                date: "10 de Maio, 2025",
                image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
              },
              {
                title: "Inflação e seus impactos nos investimentos",
                description: "Entenda como a inflação pode afetar sua carteira de investimentos e quais estratégias adotar",
                date: "05 de Maio, 2025",
                image: "https://images.unsplash.com/photo-1630569470960-ec1e8c072b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
              }
            ].map((news, i) => (
              <div key={i} className="news-card animate-fade-in" style={{ animationDelay: `${(i+2)*100}ms` }}>
                <div className="overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="news-image"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-1 rounded-full bg-accent"></div>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{news.description}</p>
                  <Link to="/noticias" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group">
                    Ler Mais 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/noticias">
              <Button size="lg" className="group">
                Ver Todas as Notícias
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-to-b from-primary/95 to-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm animate-fade-in">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in animate-delay-100">O que nossos clientes dizem</h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "O InvestSavy transformou completamente minha visão sobre investimentos. Hoje me sinto muito mais seguro para tomar decisões financeiras.",
                name: "Carlos Silva",
                role: "Empresário",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "A consultoria personalizada do InvestSavy me ajudou a aumentar meu patrimônio em 40% em apenas 18 meses. Recomendo a todos!",
                name: "Amanda Costa",
                role: "Engenheira",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "Os cursos de educação financeira são excepcionais. Conteúdo prático, fácil de entender e que realmente faz diferença no dia a dia.",
                name: "Roberto Mendes",
                role: "Professor",
                avatar: "https://randomuser.me/api/portraits/men/67.jpg"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-effect rounded-2xl p-6 animate-fade-in" style={{ animationDelay: `${(i+2)*100}ms` }}>
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="italic mb-6 text-white/90">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm animate-fade-in">Recursos</span>
            <h2 className="section-heading text-center mx-auto after:mx-auto mt-3 animate-fade-in animate-delay-100">Ferramentas para o seu sucesso</h2>
            <p className="text-lg text-muted-foreground animate-fade-in animate-delay-200">
              Conheça nossas ferramentas desenvolvidas para potencializar seus investimentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tool-card animate-fade-in animate-delay-200">
              <div className="tool-icon">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Calculadora de Investimentos</h3>
              <p className="text-center text-muted-foreground mb-6">
                Faça simulações de investimentos e veja quanto seu dinheiro pode render ao longo do tempo.
              </p>
              <div className="mt-auto text-center">
                <Link to="/ferramentas">
                  <Button className="group">
                    Acessar Ferramenta
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="tool-card animate-fade-in animate-delay-300">
              <div className="tool-icon">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Análise de Carteira</h3>
              <p className="text-center text-muted-foreground mb-6">
                Analise sua carteira de investimentos e receba recomendações personalizadas para otimizá-la.
              </p>
              <div className="mt-auto text-center">
                <Link to="/ferramentas">
                  <Button className="group">
                    Acessar Ferramenta
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/ferramentas">
              <Button size="lg" className="group">
                Explorar Todas as Ferramentas
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronto para começar a investir melhor?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar você a alcançar seus objetivos financeiros com estratégias personalizadas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                  Fale Conosco
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Agende uma Consultoria
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
