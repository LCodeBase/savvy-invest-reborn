
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

const newsCategories = [
  { id: "todos", name: "Todos" },
  { id: "investimentos", name: "Investimentos" },
  { id: "economia", name: "Economia" },
  { id: "mercado", name: "Mercado" },
  { id: "educacao", name: "Educação" }
];

const newsList = [
  {
    id: 1,
    title: "Novas tendências de investimento para 2023",
    description: "Confira as tendências de investimento que estão dominando o mercado neste ano e como você pode se beneficiar delas. De criptomoedas a ESG, descubra o que está em alta.",
    category: "investimentos",
    date: "15 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 2,
    title: "Como a inteligência artificial está transformando o mercado financeiro",
    description: "Descubra como a IA está revolucionando a análise e as decisões de investimento, desde algoritmos de trading até análise preditiva de tendências de mercado.",
    category: "tecnologia",
    date: "10 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 3,
    title: "Inflação e seus impactos nos investimentos",
    description: "Entenda como a inflação pode afetar sua carteira de investimentos e quais estratégias adotar para proteger seu patrimônio em cenários de alta inflacionária.",
    category: "economia",
    date: "05 de Maio, 2023",
    image: "https://images.unsplash.com/photo-1630569470960-ec1e8c072b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 4,
    title: "O futuro da educação financeira no Brasil",
    description: "A educação financeira está ganhando cada vez mais espaço nas escolas e na vida dos brasileiros. Entenda as iniciativas que estão transformando a relação dos brasileiros com o dinheiro.",
    category: "educacao",
    date: "28 de Abril, 2023",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 5,
    title: "Mercado imobiliário: investir agora ou esperar?",
    description: "Análise completa do cenário atual do mercado imobiliário brasileiro e as perspectivas para os próximos anos. Descubra se este é o momento certo para investir.",
    category: "mercado",
    date: "20 de Abril, 2023",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 6,
    title: "Diversificação internacional: por que e como investir no exterior",
    description: "Saiba por que investir no exterior é uma estratégia importante para diversificação e quais são as melhores opções para investidores brasileiros começarem.",
    category: "investimentos",
    date: "15 de Abril, 2023",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
  }
];

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredNews = newsList.filter(
    (news) =>
      (activeCategory === "todos" || news.category === activeCategory) &&
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Notícias e Análises
            </h1>
            <p className="text-xl text-white/90 animate-fade-in animate-delay-100">
              Fique por dentro das últimas novidades e análises do mercado financeiro
            </p>
          </div>
        </div>
      </section>

      {/* News Filter Section */}
      <section className="bg-secondary/50 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="search"
                placeholder="Pesquisar notícias..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <Tabs defaultValue="todos" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                  {newsCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* News Listing Section */}
      <section className="section">
        <div className="container">
          {filteredNews.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold mb-2">Nenhuma notícia encontrada</h3>
              <p className="text-muted-foreground">Tente ajustar sua pesquisa ou categoria selecionada.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news, i) => (
                <Card key={news.id} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${i*100}ms` }}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                      </span>
                      <span className="text-xs text-muted-foreground">{news.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2 mt-2">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">{news.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Ler Artigo Completo</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Receba as notícias em primeira mão
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Inscreva-se em nossa newsletter e receba as notícias mais relevantes diretamente na sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white text-foreground"
              />
              <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Noticias;
