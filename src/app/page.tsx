"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Check, 
  ArrowRight,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  Code,
  BarChart,
  Video,
  ChevronDown
} from "lucide-react";

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const content = {
    pt: {
      nav: {
        features: "Funcionalidades",
        examples: "Exemplos",
        pricing: "Preços",
        cta: "Começar Grátis"
      },
      hero: {
        badge: "Powered by IA Avançada",
        title: "Transforme seu Trabalho com",
        titleHighlight: "Inteligência Artificial",
        subtitle: "Automatize tarefas, crie conteúdo e aumente sua produtividade com nossa plataforma de IA de última geração. Resultados profissionais em segundos.",
        cta: "Começar Agora",
        ctaSecondary: "Ver Demonstração"
      },
      features: {
        title: "Funcionalidades Poderosas",
        subtitle: "Tudo o que precisa para trabalhar mais rápido e melhor",
        items: [
          {
            icon: Sparkles,
            title: "IA Generativa",
            description: "Crie textos, imagens e código com qualidade profissional"
          },
          {
            icon: Zap,
            title: "Processamento Rápido",
            description: "Resultados instantâneos com tecnologia de ponta"
          },
          {
            icon: Shield,
            title: "Segurança Total",
            description: "Seus dados protegidos com criptografia avançada"
          },
          {
            icon: Globe,
            title: "Suporte Multilíngue",
            description: "Trabalhe em mais de 50 idiomas diferentes"
          }
        ]
      },
      examples: {
        title: "O Que Pode Fazer",
        subtitle: "Exemplos reais de trabalhos criados com nossa plataforma",
        items: [
          {
            icon: FileText,
            title: "Criação de Conteúdo",
            description: "Artigos de blog, posts para redes sociais, emails marketing",
            tags: ["SEO", "Copywriting", "Marketing"],
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop"
          },
          {
            icon: ImageIcon,
            title: "Geração de Imagens",
            description: "Logos, banners, ilustrações e designs personalizados",
            tags: ["Design", "Branding", "Arte"],
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
          },
          {
            icon: MessageSquare,
            title: "Chatbots Inteligentes",
            description: "Assistentes virtuais para atendimento ao cliente 24/7",
            tags: ["Suporte", "Automação", "CX"],
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop"
          },
          {
            icon: Code,
            title: "Desenvolvimento de Código",
            description: "Geração de código, debugging e otimização",
            tags: ["Web", "Apps", "APIs"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
          },
          {
            icon: BarChart,
            title: "Análise de Dados",
            description: "Insights automáticos e relatórios detalhados",
            tags: ["Analytics", "BI", "Reports"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
          },
          {
            icon: Video,
            title: "Edição de Vídeo",
            description: "Legendas automáticas, resumos e transcrições",
            tags: ["Vídeo", "Áudio", "Legendas"],
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
          }
        ]
      },
      pricing: {
        title: "Planos Transparentes",
        subtitle: "Escolha o plano ideal para suas necessidades",
        monthly: "Mensal",
        annual: "Anual",
        save: "Poupe 20%",
        plans: [
          {
            name: "Starter",
            description: "Perfeito para começar",
            price: "29",
            period: "/mês",
            features: [
              "10.000 tokens/mês",
              "Acesso a modelos básicos",
              "Suporte por email",
              "Histórico de 30 dias",
              "API básica"
            ],
            cta: "Começar Grátis",
            popular: false
          },
          {
            name: "Professional",
            description: "Para profissionais exigentes",
            price: "79",
            period: "/mês",
            features: [
              "100.000 tokens/mês",
              "Todos os modelos de IA",
              "Suporte prioritário",
              "Histórico ilimitado",
              "API avançada",
              "Integrações premium",
              "Treinamento personalizado"
            ],
            cta: "Começar Agora",
            popular: true
          },
          {
            name: "Enterprise",
            description: "Para equipas e empresas",
            price: "299",
            period: "/mês",
            features: [
              "Tokens ilimitados",
              "Modelos personalizados",
              "Suporte dedicado 24/7",
              "SLA garantido",
              "API enterprise",
              "Onboarding completo",
              "Segurança avançada",
              "Gestão de equipa"
            ],
            cta: "Contactar Vendas",
            popular: false
          }
        ]
      },
      cta: {
        title: "Pronto para Começar?",
        subtitle: "Junte-se a milhares de profissionais que já transformaram seu trabalho com IA",
        button: "Começar Gratuitamente",
        note: "Sem cartão de crédito necessário"
      },
      footer: {
        rights: "Todos os direitos reservados.",
        product: "Produto",
        company: "Empresa",
        resources: "Recursos"
      }
    },
    en: {
      nav: {
        features: "Features",
        examples: "Examples",
        pricing: "Pricing",
        cta: "Start Free"
      },
      hero: {
        badge: "Powered by Advanced AI",
        title: "Transform Your Work with",
        titleHighlight: "Artificial Intelligence",
        subtitle: "Automate tasks, create content, and boost your productivity with our cutting-edge AI platform. Professional results in seconds.",
        cta: "Get Started",
        ctaSecondary: "Watch Demo"
      },
      features: {
        title: "Powerful Features",
        subtitle: "Everything you need to work faster and better",
        items: [
          {
            icon: Sparkles,
            title: "Generative AI",
            description: "Create professional-quality text, images, and code"
          },
          {
            icon: Zap,
            title: "Fast Processing",
            description: "Instant results with cutting-edge technology"
          },
          {
            icon: Shield,
            title: "Total Security",
            description: "Your data protected with advanced encryption"
          },
          {
            icon: Globe,
            title: "Multilingual Support",
            description: "Work in over 50 different languages"
          }
        ]
      },
      examples: {
        title: "What You Can Do",
        subtitle: "Real examples of work created with our platform",
        items: [
          {
            icon: FileText,
            title: "Content Creation",
            description: "Blog articles, social media posts, marketing emails",
            tags: ["SEO", "Copywriting", "Marketing"],
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop"
          },
          {
            icon: ImageIcon,
            title: "Image Generation",
            description: "Logos, banners, illustrations, and custom designs",
            tags: ["Design", "Branding", "Art"],
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
          },
          {
            icon: MessageSquare,
            title: "Smart Chatbots",
            description: "Virtual assistants for 24/7 customer service",
            tags: ["Support", "Automation", "CX"],
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop"
          },
          {
            icon: Code,
            title: "Code Development",
            description: "Code generation, debugging, and optimization",
            tags: ["Web", "Apps", "APIs"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
          },
          {
            icon: BarChart,
            title: "Data Analysis",
            description: "Automatic insights and detailed reports",
            tags: ["Analytics", "BI", "Reports"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
          },
          {
            icon: Video,
            title: "Video Editing",
            description: "Automatic subtitles, summaries, and transcriptions",
            tags: ["Video", "Audio", "Captions"],
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
          }
        ]
      },
      pricing: {
        title: "Transparent Pricing",
        subtitle: "Choose the perfect plan for your needs",
        monthly: "Monthly",
        annual: "Annual",
        save: "Save 20%",
        plans: [
          {
            name: "Starter",
            description: "Perfect to get started",
            price: "29",
            period: "/month",
            features: [
              "10,000 tokens/month",
              "Access to basic models",
              "Email support",
              "30-day history",
              "Basic API"
            ],
            cta: "Start Free",
            popular: false
          },
          {
            name: "Professional",
            description: "For demanding professionals",
            price: "79",
            period: "/month",
            features: [
              "100,000 tokens/month",
              "All AI models",
              "Priority support",
              "Unlimited history",
              "Advanced API",
              "Premium integrations",
              "Custom training"
            ],
            cta: "Get Started",
            popular: true
          },
          {
            name: "Enterprise",
            description: "For teams and companies",
            price: "299",
            period: "/month",
            features: [
              "Unlimited tokens",
              "Custom models",
              "24/7 dedicated support",
              "Guaranteed SLA",
              "Enterprise API",
              "Complete onboarding",
              "Advanced security",
              "Team management"
            ],
            cta: "Contact Sales",
            popular: false
          }
        ]
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Join thousands of professionals who have already transformed their work with AI",
        button: "Start Free",
        note: "No credit card required"
      },
      footer: {
        rights: "All rights reserved.",
        product: "Product",
        company: "Company",
        resources: "Resources"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl dark:bg-slate-950/90 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                AI SaaS
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                {t.nav.features}
              </a>
              <a href="#examples" className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                {t.nav.examples}
              </a>
              <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                {t.nav.pricing}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="text-sm font-medium"
              >
                {language === "pt" ? "🇬🇧 EN" : "🇵🇹 PT"}
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300">
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-orange-100 dark:from-blue-950/30 dark:via-slate-950 dark:to-orange-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white border-0 shadow-lg px-4 py-1.5 text-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-lg px-8 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/30 transition-all duration-300">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <ChevronDown className="h-8 w-8 text-blue-600 animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 sm:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {t.examples.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.examples.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.examples.items.map((example, index) => {
              const Icon = example.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 hover:border-blue-500 overflow-hidden hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-950 dark:to-orange-950">
                    <img 
                      src={example.image} 
                      alt={example.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{example.title}</CardTitle>
                    <CardDescription className="text-base">
                      {example.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {example.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              {t.pricing.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              {t.pricing.subtitle}
            </p>
            
            <Tabs defaultValue="monthly" className="w-fit mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-blue-100 dark:bg-blue-950">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-orange-500 data-[state=active]:text-white">{t.pricing.monthly}</TabsTrigger>
                <TabsTrigger value="annual" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-orange-500 data-[state=active]:text-white">
                  {t.pricing.annual}
                  <Badge className="ml-2 bg-green-500 text-white text-xs border-0">
                    {t.pricing.save}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.pricing.plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-4 border-blue-500 shadow-2xl shadow-blue-500/30 scale-105' 
                    : 'border-2 hover:border-blue-400 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-orange-500 text-white border-0 px-4 py-1 shadow-lg">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">€{plan.price}</span>
                    <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 shadow-lg hover:shadow-xl hover:scale-105'
                        : 'hover:scale-105'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 shadow-2xl hover:scale-105 transition-all duration-300">
            {t.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-blue-100 mt-4">
            {t.cta.note}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  AI SaaS
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === "pt" 
                  ? "Transformando trabalho com IA"
                  : "Transforming work with AI"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-blue-600">{t.footer.product}</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.features}</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.pricing}</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-blue-600">{t.footer.company}</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {language === "pt" ? "Sobre" : "About"}
                </a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {language === "pt" ? "Contacto" : "Contact"}
                </a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-blue-600">{t.footer.resources}</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {language === "pt" ? "Documentação" : "Documentation"}
                </a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
            <p>© 2024 AI SaaS. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
