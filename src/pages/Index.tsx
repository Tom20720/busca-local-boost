
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, ArrowUp, ArrowDown, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Domine o <span className="text-accent-500">SEO Local em Guarulhos</span> com Estratégias Comprovadas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Milhares de negócios já estão alcançando as primeiras posições no Google e multiplicando seus resultados com nossas estratégias digitais. Sua empresa pode ser a próxima — não fique de fora!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contato">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-3">
                  Domine o Google Agora
                </Button>
              </Link>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-3">
                  Nossos Serviços SEO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NAP Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-800" />
                <div>
                  <p className="font-semibold text-gray-900">Busca Local Pro</p>
                  <p className="text-sm text-gray-600">Rua das Palmeiras, 123 - Centro, Guarulhos - SP, 07010-000</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-primary-800" />
                <div>
                  <p className="font-semibold text-gray-900">(11) 99999-9999</p>
                  <p className="text-sm text-gray-600">Especialistas em SEO Local</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-primary-800" />
                <div>
                  <p className="font-semibold text-gray-900">contato@buscalocalpro.com.br</p>
                  <p className="text-sm text-gray-600">Atendimento Guarulhos e Região</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Reais de Empresas em Guarulhos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aproveite nossa experiência e coloque sua marca em evidência na internet, do jeito certo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary-800 mb-2">95%</div>
              <p className="text-gray-600">Melhoria no Rankeamento Local em Guarulhos</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-secondary-600 mb-2">3x</div>
              <p className="text-gray-600">Aumento em Leads Qualificados</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-accent-500 mb-2">30 dias</div>
              <p className="text-gray-600">Para Dominar os Resultados Locais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEO Local Especializado em Guarulhos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estratégias locais comprovadas para posicionar sua empresa no topo do Google em Guarulhos e região
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Google Business Profile Guarulhos</h3>
                <p className="text-gray-600 mb-4">
                  Otimização completa do seu perfil comercial no Google para máxima visibilidade em Guarulhos e região metropolitana.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Criação e verificação do perfil</li>
                  <li>• Gestão de reviews e avaliações</li>
                  <li>• Postagens estratégicas locais</li>
                  <li>• Otimização para Google Maps Guarulhos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <ArrowUp className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SEO Local Avançado</h3>
                <p className="text-gray-600 mb-4">
                  Estratégias técnicas de SEO focadas em resultados locais e palavras-chave geográficas de Guarulhos.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Palavras-chave "Guarulhos" e região</li>
                  <li>• Otimização técnica on-page</li>
                  <li>• Link building local Guarulhos</li>
                  <li>• Citações e diretórios regionais</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <ArrowDown className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultoria Presencial</h3>
                <p className="text-gray-600 mb-4">
                  Análise detalhada da sua presença online com especialistas locais de Guarulhos que conhecem o mercado.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Auditoria completa de SEO local</li>
                  <li>• Análise da concorrência em Guarulhos</li>
                  <li>• Plano de ação estratégico local</li>
                  <li>• Monitoramento contínuo regional</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white">
                Ver Todos os Serviços SEO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Guarulhos Focus Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que Escolher Especialistas Locais de Guarulhos?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Conhecemos o mercado local, os hábitos de busca da região e as melhores estratégias 
              para posicionar seu negócio no Google em Guarulhos e cidades vizinhas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Conhecimento Local</h4>
                <p className="text-gray-600 mb-4">
                  Especialistas que vivem e trabalham em Guarulhos, conhecendo as particularidades 
                  do mercado local e regional.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🚀 Resultados Mais Rápidos</h4>
                <p className="text-gray-600 mb-4">
                  Estratégias locais otimizadas que aceleram seu posicionamento nos resultados 
                  de busca para Guarulhos e região.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📍 Atendimento Presencial</h4>
                <p className="text-gray-600 mb-4">
                  Possibilidade de reuniões presenciais em Guarulhos para alinhamento estratégico 
                  e acompanhamento dos resultados.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🎪 Rede Local</h4>
                <p className="text-gray-600 mb-4">
                  Conexões com outros negócios locais, facilitando parcerias e estratégias 
                  de link building regional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não Fique de Fora! Domine o Google em Guarulhos Agora
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Sua concorrência já está investindo em SEO local. Não deixe que eles fiquem 
              na frente. Vamos criar uma estratégia personalizada para seu negócio dominar 
              os resultados locais de Guarulhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-3">
                  Quero Dominar o Google Hoje
                </Button>
              </Link>
              <a 
                href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre SEO Local em Guarulhos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-3">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
