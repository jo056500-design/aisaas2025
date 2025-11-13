"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Check, 
  ArrowRight,
  Code,
  BarChart,
  MessageSquare,
  Star,
  Users,
  TrendingUp,
  X,
  Play,
  ExternalLink,
  ShoppingCart,
  Building2
} from "lucide-react";

export default function Home() {
  const [showFreeTrial, setShowFreeTrial] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedPurchaseProject, setSelectedPurchaseProject] = useState<number | null>(null);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [purchasedProjects, setPurchasedProjects] = useState<number[]>([]);
  const [showPlanPurchaseModal, setShowPlanPurchaseModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [planPurchaseComplete, setPlanPurchaseComplete] = useState(false);

  const features = [
    { icon: Sparkles, title: "IA Generativa", description: "Crie textos, imagens e código com qualidade profissional" },
    { icon: Zap, title: "Processamento Rápido", description: "Resultados instantâneos com tecnologia de ponta" },
    { icon: Shield, title: "Segurança Total", description: "Seus dados protegidos com criptografia avançada" },
    { icon: Globe, title: "Acesso Global", description: "Disponível em qualquer lugar, a qualquer momento" }
  ];

  const portfolio = [
    {
      title: "E-commerce Fashion",
      description: "Plataforma completa de vendas online",
      metrics: { revenue: "+250%", conversion: "4.2%", users: "50k+" },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/QqsaZS-N0Ok",
      price: 259
    },
    {
      title: "App Fitness",
      description: "Aplicativo de treinos personalizados",
      metrics: { revenue: "+180%", conversion: "6.8%", users: "30k+" },
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/UItWltVZZmE",
      price: 100
    },
    {
      title: "SaaS Analytics",
      description: "Dashboard de análise de dados",
      metrics: { revenue: "+320%", conversion: "8.1%", users: "100k+" },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      videoUrl: "https://www.youtube.com/embed/pN34FNbOKXc",
      price: 259
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: 29,
      features: ["10 projetos IA/mês", "Suporte por email", "1 usuário", "Recursos básicos"],
      icon: Users
    },
    {
      name: "Pro",
      price: 79,
      popular: true,
      features: ["100 projetos IA/mês", "Suporte prioritário", "5 usuários", "Recursos avançados", "API access"],
      icon: Zap
    },
    {
      name: "Enterprise",
      price: 499,
      features: ["Projetos ilimitados", "Suporte 24/7", "Usuários ilimitados", "Todos os recursos", "Customização completa", "Gerente dedicado", "SLA garantido"],
      icon: Building2,
      enterprise: true
    }
  ];

  const handlePurchase = (projectIdx: number) => {
    setSelectedPurchaseProject(projectIdx);
    setShowPurchaseModal(true);
    setPurchaseComplete(false);
  };

  const completePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPurchaseProject !== null) {
      setPurchasedProjects([...purchasedProjects, selectedPurchaseProject]);
      setPurchaseComplete(true);
    }
  };

  const handlePlanPurchase = (planIdx: number) => {
    setSelectedPlan(planIdx);
    setShowPlanPurchaseModal(true);
    setPlanPurchaseComplete(false);
  };

  const completePlanPurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlan !== null) {
      setPlanPurchaseComplete(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Platform
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Funcionalidades</a>
            <a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">Portfólio</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Preços</a>
            <Button onClick={() => setShowFreeTrial(true)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Começar Grátis
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
          <Sparkles className="w-3 h-3 mr-1" />
          Powered by IA Avançada
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transforme seu Trabalho com{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Inteligência Artificial
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Automatize tarefas, crie conteúdo e aumente sua produtividade com nossa plataforma de IA de última geração.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => setShowFreeTrial(true)} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Começar Agora
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Portfólio
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Funcionalidades Poderosas</h2>
          <p className="text-gray-600">Tudo o que precisa para trabalhar mais rápido e melhor</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-2 hover:border-purple-300 transition-all hover:shadow-xl">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Projetos de Sucesso</h2>
            <p className="text-gray-600">Veja como transformamos negócios com IA - Assista aos demos e adquira soluções completas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden group cursor-pointer" onClick={() => setSelectedProject(idx)}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white text-purple-700">
                    <Star className="w-3 h-3 mr-1" />
                    Destaque
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{project.metrics.revenue}</div>
                      <div className="text-xs text-gray-500">Receita</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{project.metrics.conversion}</div>
                      <div className="text-xs text-gray-500">Conversão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{project.metrics.users}</div>
                      <div className="text-xs text-gray-500">Usuários</div>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Solução Completa</span>
                      <span className="text-2xl font-bold text-green-600">€{project.price}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => setSelectedProject(idx)}>
                      <Play className="w-4 h-4 mr-1" />
                      Ver Demo
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" onClick={() => handlePurchase(idx)}>
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Planos Flexíveis</h2>
          <p className="text-gray-600">Escolha o plano ideal para seu negócio - Soluções para todos os tamanhos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card key={idx} className={`relative ${plan.popular ? 'border-purple-500 border-2 shadow-2xl scale-105' : ''} ${plan.enterprise ? 'border-amber-500 border-2 shadow-2xl' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600">
                  Mais Popular
                </Badge>
              )}
              {plan.enterprise && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600">
                  <Building2 className="w-3 h-3 mr-1" />
                  Para Empresas
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <plan.icon className={`w-6 h-6 ${plan.enterprise ? 'text-amber-600' : 'text-purple-600'}`} />
                  <CardTitle>{plan.name}</CardTitle>
                </div>
                <div className="text-4xl font-bold mt-4">
                  €{plan.price}
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                {plan.enterprise && (
                  <p className="text-sm text-amber-600 font-medium mt-2">Suporte premium e recursos exclusivos</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className={`w-5 h-5 ${plan.enterprise ? 'text-amber-600' : 'text-green-600'}`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handlePlanPurchase(idx)}
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''} ${plan.enterprise ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700' : ''}`}
                >
                  {plan.enterprise ? 'Falar com Vendas' : 'Começar Agora'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold">AI Platform</span>
          </div>
          <p className="text-gray-400">© 2024 AI Platform. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Free Trial Modal */}
      {showFreeTrial && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4"
                onClick={() => setShowFreeTrial(false)}
              >
                <X className="w-4 h-4" />
              </Button>
              <CardTitle className="text-2xl">Comece Grátis Agora!</CardTitle>
              <CardDescription>
                Experimente todas as funcionalidades premium por 14 dias, sem cartão de crédito
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Acesso completo a todos os recursos",
                  "Suporte prioritário 24/7",
                  "Sem compromisso, cancele quando quiser",
                  "Configuração em menos de 2 minutos"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email profissional</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="joao@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Empresa (opcional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Minha Empresa Ltda"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Iniciar Teste Grátis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Ao clicar, você concorda com nossos Termos de Serviço
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Project Demo Modal with Video */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-4 h-4" />
              </Button>
              <CardTitle className="text-2xl">{portfolio[selectedProject].title}</CardTitle>
              <CardDescription>Demonstração completa do projeto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={portfolio[selectedProject].videoUrl}
                  title={portfolio[selectedProject].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">{portfolio[selectedProject].description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600">{portfolio[selectedProject].metrics.revenue}</div>
                  <div className="text-sm text-gray-600 mt-1">Aumento de Receita</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600">{portfolio[selectedProject].metrics.conversion}</div>
                  <div className="text-sm text-gray-600 mt-1">Taxa de Conversão</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600">{portfolio[selectedProject].metrics.users}</div>
                  <div className="text-sm text-gray-600 mt-1">Usuários Ativos</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Adquira esta Solução</h3>
                    <p className="text-sm text-gray-600">Código-fonte completo + documentação + suporte</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">€{portfolio[selectedProject].price}</div>
                    <div className="text-sm text-gray-500">pagamento único</div>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => {
                    setSelectedProject(null);
                    handlePurchase(selectedProject);
                  }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Agora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Purchase Modal */}
      {showPurchaseModal && selectedPurchaseProject !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-lg w-full">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4"
                onClick={() => {
                  setShowPurchaseModal(false);
                  setSelectedPurchaseProject(null);
                  setPurchaseComplete(false);
                }}
              >
                <X className="w-4 h-4" />
              </Button>
              <CardTitle className="text-2xl">
                {purchaseComplete ? "Compra Confirmada!" : "Finalizar Compra"}
              </CardTitle>
              <CardDescription>
                {portfolio[selectedPurchaseProject].title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!purchaseComplete ? (
                <>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6 border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Solução Completa</span>
                      <span className="text-2xl font-bold text-purple-600">€{portfolio[selectedPurchaseProject].price}</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Código-fonte completo
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Documentação técnica
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        30 dias de suporte
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Atualizações gratuitas por 1 ano
                      </li>
                    </ul>
                  </div>

                  <form className="space-y-4" onSubmit={completePurchase}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome completo</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="João Silva"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="joao@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Minha Empresa Ltda"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Confirmar Compra - €{portfolio[selectedPurchaseProject].price}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Pagamento seguro. Você receberá o acesso imediatamente após a confirmação.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h3>
                  <p className="text-gray-600 mb-6">
                    Obrigado pela sua compra! Você agora tem acesso completo a:
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 mb-6 text-left">
                    <h4 className="font-bold text-lg mb-3">{portfolio[selectedPurchaseProject].title}</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Código-fonte completo (download disponível)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Documentação técnica detalhada
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        30 dias de suporte técnico prioritário
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Atualizações gratuitas por 1 ano
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Acesso ao portal de clientes
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <strong>📧 Verifique seu email!</strong><br />
                      Enviamos as instruções de acesso e download para o email cadastrado.
                    </p>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => {
                      setShowPurchaseModal(false);
                      setSelectedPurchaseProject(null);
                      setPurchaseComplete(false);
                    }}
                  >
                    Fechar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Plan Purchase Modal */}
      {showPlanPurchaseModal && selectedPlan !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-lg w-full">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4"
                onClick={() => {
                  setShowPlanPurchaseModal(false);
                  setSelectedPlan(null);
                  setPlanPurchaseComplete(false);
                }}
              >
                <X className="w-4 h-4" />
              </Button>
              <CardTitle className="text-2xl">
                {planPurchaseComplete ? "Assinatura Confirmada!" : "Assinar Plano"}
              </CardTitle>
              <CardDescription>
                Plano {plans[selectedPlan].name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!planPurchaseComplete ? (
                <>
                  <div className={`p-4 rounded-lg mb-6 border ${plans[selectedPlan].enterprise ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200' : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'}`}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-medium">Plano {plans[selectedPlan].name}</span>
                      <span className="text-2xl font-bold text-purple-600">€{plans[selectedPlan].price}/mês</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {plans[selectedPlan].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className={`w-4 h-4 ${plans[selectedPlan].enterprise ? 'text-amber-600' : 'text-green-600'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <form className="space-y-4" onSubmit={completePlanPurchase}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome completo</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="João Silva"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="joao@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Minha Empresa Ltda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Número do cartão</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Validade</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="MM/AA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <Button type="submit" className={`w-full ${plans[selectedPlan].enterprise ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'}`}>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Confirmar Assinatura - €{plans[selectedPlan].price}/mês
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Pagamento seguro. Você pode cancelar a qualquer momento.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Assinatura Confirmada!</h3>
                  <p className="text-gray-600 mb-6">
                    Bem-vindo ao plano {plans[selectedPlan].name}! Sua assinatura está ativa.
                  </p>
                  
                  <div className={`p-6 rounded-lg border mb-6 text-left ${plans[selectedPlan].enterprise ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200' : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'}`}>
                    <h4 className="font-bold text-lg mb-3">Plano {plans[selectedPlan].name}</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {plans[selectedPlan].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className={`w-4 h-4 ${plans[selectedPlan].enterprise ? 'text-amber-600' : 'text-green-600'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <strong>📧 Verifique seu email!</strong><br />
                      Enviamos as instruções de acesso à sua conta.
                    </p>
                  </div>

                  <Button 
                    className={`w-full ${plans[selectedPlan].enterprise ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'}`}
                    onClick={() => {
                      setShowPlanPurchaseModal(false);
                      setSelectedPlan(null);
                      setPlanPurchaseComplete(false);
                    }}
                  >
                    Fechar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
