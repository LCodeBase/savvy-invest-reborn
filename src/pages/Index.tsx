
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white">
                Investir com inteligência é o caminho para o sucesso financeiro
              </h1>
              <p className="text-xl text-white/90">
                O InvestSavy te ajuda a entender o mundo dos investimentos e a tomar decisões financeiras inteligentes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                  Comece Agora
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Pessoa analisando gráficos financeiros" 
                className="rounded-lg shadow-xl animate-fade-in animate-delay-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-100">
              Oferecemos uma variedade de serviços para ajudar você a alcançar seus objetivos financeiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Consultoria Financeira",
                description: "Consultoria personalizada para seus objetivos financeiros",
                icon: "👨‍💼"
              },
              {
                title: "Análise de Mercado",
                description: "Análises detalhadas sobre tendências de mercado e oportunidades",
                icon: "📊"
              },
              {
                title: "Educação Financeira",
                description: "Cursos e materiais para ampliar seu conhecimento financeiro",
                icon: "📚"
              }
            ].map((service, i) => (
              <Card key={i} className="animate-fade-in" style={{ animationDelay: `${(i+2)*100}ms` }}>
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/servicos">
                    <Button variant="outline">Saiba Mais</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/servicos">
              <Button size="lg">Ver Todos os Serviços</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Últimas Notícias</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-100">
              Fique por dentro das principais notícias do mercado financeiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Novas tendências de investimento para 2023",
                description: "Confira as tendências de investimento que estão dominando o mercado neste ano",
                date: "15 de Maio, 2023",
                image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
              },
              {
                title: "Como a inteligência artificial está transformando o mercado financeiro",
                description: "Descubra como a IA está revolucionando a análise e as decisões de investimento",
                date: "10 de Maio, 2023",
                image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
              },
              {
                title: "Inflação e seus impactos nos investimentos",
                description: "Entenda como a inflação pode afetar sua carteira de investimentos",
                date: "05 de Maio, 2023",
                image: "https://images.unsplash.com/photo-1630569470960-ec1e8c072b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
              }
            ].map((news, i) => (
              <Card key={i} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${(i+2)*100}ms` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground">{news.date}</div>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">{news.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/noticias">
                    <Button variant="outline">Ler Mais</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/noticias">
              <Button size="lg">Ver Todas as Notícias</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Por que escolher o InvestSavy?</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Experiência</h3>
                    <p className="text-primary-foreground/90">Com mais de 10 anos de experiência no mercado financeiro, nossa equipe conhece os caminhos para o sucesso.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Transparência</h3>
                    <p className="text-primary-foreground/90">Somos transparentes em nossas análises e recomendações, priorizando sempre o seu interesse.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Resultados</h3>
                    <p className="text-primary-foreground/90">Nossa metodologia comprovada já ajudou mais de 5.000 clientes a alcançarem seus objetivos financeiros.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/sobre">
                  <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                    Conheça Nossa História
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Nossa equipe em reunião" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 md:p-6 rounded-lg shadow-lg">
                <p className="text-xl md:text-3xl font-bold text-primary">+5.000</p>
                <p className="text-primary font-medium">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ferramentas para o seu sucesso</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-100">
              Conheça nossas ferramentas desenvolvidas para potencializar seus investimentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden animate-fade-in animate-delay-200">
              <div className="bg-muted p-6 flex items-center justify-center h-48">
                <div className="text-5xl">📈</div>
              </div>
              <CardHeader>
                <CardTitle>Calculadora de Investimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Faça simulações de investimentos e veja quanto seu dinheiro pode render ao longo do tempo.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to="/ferramentas">
                  <Button>Acessar Ferramenta</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden animate-fade-in animate-delay-300">
              <div className="bg-muted p-6 flex items-center justify-center h-48">
                <div className="text-5xl">📊</div>
              </div>
              <CardHeader>
                <CardTitle>Análise de Carteira</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Analise sua carteira de investimentos e receba recomendações personalizadas para otimizá-la.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to="/ferramentas">
                  <Button>Acessar Ferramenta</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/ferramentas">
              <Button size="lg">Explorar Todas as Ferramentas</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar a investir melhor?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar você a alcançar seus objetivos financeiros.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">Entre em Contato</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
