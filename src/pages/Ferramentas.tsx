
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Investment Calculator Component
const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState<number | null>(null);

  const calculateInvestment = () => {
    // Monthly rate from annual return
    const monthlyRate = annualReturn / 100 / 12;
    const totalMonths = years * 12;
    let futureValue = initialInvestment;

    for (let i = 0; i < totalMonths; i++) {
      futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;
    }

    setResult(futureValue);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Parâmetros da Simulação</CardTitle>
          <CardDescription>Ajuste os valores para calcular seu investimento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Investimento Inicial</label>
            <div className="flex items-center gap-4">
              <Input 
                type="number" 
                value={initialInvestment}
                onChange={e => setInitialInvestment(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-20">
                {formatCurrency(initialInvestment)}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Aporte Mensal</label>
            <div className="flex items-center gap-4">
              <Input 
                type="number" 
                value={monthlyContribution}
                onChange={e => setMonthlyContribution(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-20">
                {formatCurrency(monthlyContribution)}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Rentabilidade Anual (%)</label>
            <div className="flex items-center gap-4">
              <Input 
                type="number" 
                value={annualReturn}
                onChange={e => setAnnualReturn(Number(e.target.value))}
                className="flex-1"
                min="0"
                max="30"
              />
              <span className="text-sm text-muted-foreground w-20">{annualReturn}%</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium">Período (anos)</label>
              <span className="text-sm text-muted-foreground">{years} anos</span>
            </div>
            <Slider 
              min={1} 
              max={40} 
              step={1} 
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={calculateInvestment} className="w-full">Calcular</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Resultado da Simulação</CardTitle>
          <CardDescription>Veja como seu dinheiro pode crescer ao longo do tempo</CardDescription>
        </CardHeader>
        <CardContent className="h-[250px] flex flex-col items-center justify-center">
          {result === null ? (
            <div className="text-center">
              <p className="text-muted-foreground">
                Ajuste os parâmetros e clique em Calcular para ver o resultado
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-muted-foreground">Valor Futuro Estimado</h3>
                <p className="text-4xl font-bold text-primary">{formatCurrency(result)}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Investido</p>
                  <p className="font-medium">{formatCurrency(initialInvestment + (monthlyContribution * years * 12))}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Juros Ganhos</p>
                  <p className="font-medium">{formatCurrency(result - (initialInvestment + (monthlyContribution * years * 12)))}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Risk Profile Tool Component
const RiskProfileTool = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });
  const [profile, setProfile] = useState<string | null>(null);

  const questions = [
    {
      id: "q1",
      question: "Por quanto tempo você pretende manter seus investimentos?",
      options: [
        { value: "a", label: "Menos de 1 ano" },
        { value: "b", label: "1 a 3 anos" },
        { value: "c", label: "3 a 5 anos" },
        { value: "d", label: "Mais de 5 anos" }
      ]
    },
    {
      id: "q2",
      question: "Como você reagiria se seus investimentos perdessem 20% do valor em um mês?",
      options: [
        { value: "a", label: "Venderia tudo imediatamente" },
        { value: "b", label: "Venderia parte dos investimentos" },
        { value: "c", label: "Não faria nada" },
        { value: "d", label: "Compraria mais, aproveitando os preços baixos" }
      ]
    },
    {
      id: "q3",
      question: "Qual é o seu principal objetivo ao investir?",
      options: [
        { value: "a", label: "Preservar meu capital, mesmo que o retorno seja baixo" },
        { value: "b", label: "Um equilíbrio entre crescimento e segurança" },
        { value: "c", label: "Crescimento moderado, aceitando alguma volatilidade" },
        { value: "d", label: "Máximo crescimento, mesmo com alta volatilidade" }
      ]
    },
    {
      id: "q4",
      question: "Qual porcentagem do seu patrimônio você está investindo?",
      options: [
        { value: "a", label: "Mais de 75%" },
        { value: "b", label: "Entre 50% e 75%" },
        { value: "c", label: "Entre 25% e 50%" },
        { value: "d", label: "Menos de 25%" }
      ]
    },
    {
      id: "q5",
      question: "Qual a sua experiência com investimentos?",
      options: [
        { value: "a", label: "Nenhuma ou muito pouca" },
        { value: "b", label: "Alguma experiência com produtos básicos" },
        { value: "c", label: "Experiência moderada com diversos tipos de investimentos" },
        { value: "d", label: "Ampla experiência, inclusive com investimentos complexos" }
      ]
    }
  ];

  const handleSelectChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateProfile = () => {
    // Check if all questions are answered
    const allAnswered = Object.values(answers).every(answer => answer !== "");
    if (!allAnswered) {
      alert("Por favor, responda todas as questões.");
      return;
    }

    // Simple scoring system
    let score = 0;
    Object.entries(answers).forEach(([_, value]) => {
      switch(value) {
        case 'a': score += 1; break;
        case 'b': score += 2; break;
        case 'c': score += 3; break;
        case 'd': score += 4; break;
      }
    });

    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) {
      setProfile("Conservador");
    } else if (percentage <= 50) {
      setProfile("Moderado-Conservador");
    } else if (percentage <= 75) {
      setProfile("Moderado-Agressivo");
    } else {
      setProfile("Agressivo");
    }
  };

  const resetQuiz = () => {
    setAnswers({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: ""
    });
    setProfile(null);
  };

  const profileDescriptions: Record<string, { description: string, recommended: string[] }> = {
    "Conservador": {
      description: "Você prefere segurança e estabilidade, mesmo que isso signifique retornos menores.",
      recommended: ["Tesouro Direto", "CDBs de bancos grandes", "Fundos DI", "Poupança"]
    },
    "Moderado-Conservador": {
      description: "Você busca um equilíbrio entre segurança e rentabilidade, aceitando riscos limitados.",
      recommended: ["Tesouro Direto", "CDBs", "Fundos de Renda Fixa", "Pequena alocação em fundos multimercado"]
    },
    "Moderado-Agressivo": {
      description: "Você aceita volatilidade em busca de maiores retornos, mantendo alguma segurança.",
      recommended: ["Fundos Multimercado", "Fundos Imobiliários", "Ações de empresas estabelecidas", "Renda Fixa mais arrojada"]
    },
    "Agressivo": {
      description: "Você prioriza o potencial de alto retorno e está disposto a aceitar grandes oscilações.",
      recommended: ["Ações", "ETFs", "Fundos de Ações", "Small Caps", "Parte em investimentos alternativos"]
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {profile === null ? (
        <Card>
          <CardHeader>
            <CardTitle>Questionário de Perfil de Investidor</CardTitle>
            <CardDescription>
              Responda às perguntas abaixo para descobrir seu perfil de investidor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.map(q => (
              <div key={q.id} className="space-y-2">
                <label className="font-medium">{q.question}</label>
                <Select 
                  value={answers[q.id]} 
                  onValueChange={(value) => handleSelectChange(q.id, value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    {q.options.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button onClick={calculateProfile} className="w-full">Calcular Meu Perfil</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Seu Perfil de Investidor</CardTitle>
            <div className="mt-4 mb-2">
              <span className="text-3xl font-bold text-primary">{profile}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center">{profileDescriptions[profile].description}</p>
            
            <div>
              <h4 className="font-semibold mb-2">Investimentos Recomendados:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {profileDescriptions[profile].recommended.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-secondary/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Lembre-se:</strong> Este resultado é apenas uma orientação inicial. Para uma 
                análise mais completa e recomendações personalizadas, recomendamos uma consulta com 
                nossos especialistas.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={resetQuiz} variant="outline" className="w-full">
              Reiniciar Questionário
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

const Ferramentas = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Ferramentas Financeiras
            </h1>
            <p className="text-xl text-white/90 animate-fade-in animate-delay-100">
              Utilize nossas calculadoras e simuladores para tomar decisões financeiras mais inteligentes
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section">
        <div className="container">
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="calculator">Calculadora de Investimentos</TabsTrigger>
              <TabsTrigger value="riskprofile">Perfil de Investidor</TabsTrigger>
            </TabsList>
            <TabsContent value="calculator">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Calculadora de Investimentos</h2>
                  <p className="text-muted-foreground">
                    Simule quanto seu dinheiro pode render ao longo do tempo com diferentes estratégias
                  </p>
                </div>
                <InvestmentCalculator />
              </div>
            </TabsContent>
            <TabsContent value="riskprofile">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Descubra seu Perfil de Investidor</h2>
                  <p className="text-muted-foreground">
                    Responda às perguntas para identificar qual é o seu perfil e quais investimentos são mais adequados para você
                  </p>
                </div>
                <RiskProfileTool />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Tools Section */}
      <section className="section bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mais Ferramentas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Outros recursos que podem ajudar no seu planejamento financeiro
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Comparador de Investimentos",
                description: "Compare diferentes tipos de investimentos lado a lado para fazer a melhor escolha.",
                icon: "⚖️"
              },
              {
                title: "Calculadora de Aposentadoria",
                description: "Planeje sua aposentadoria e descubra quanto você precisa poupar mensalmente.",
                icon: "🏖️"
              },
              {
                title: "Análise de Carteira",
                description: "Analise a diversificação e o risco da sua carteira atual de investimentos.",
                icon: "📊"
              }
            ].map((tool, i) => (
              <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i*100}ms` }}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{tool.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline">Em breve</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Acesso Premium às Ferramentas
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Assine nosso plano premium e tenha acesso a todas as ferramentas avançadas, relatórios personalizados e consultoria especializada.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              Conheça o Plano Premium
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ferramentas;
