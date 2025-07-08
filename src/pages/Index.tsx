
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, ArrowUp, ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Domine o <span className="text-accent-500">Google Local</span> com SEO Estratégico
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Especialistas em Google Business Profile e SEO Local. 
              Posicionamos sua empresa no topo dos resultados locais do Google e Google Maps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contato">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-3">
                  Melhore sua Presença Local Hoje
                </Button>
              </Link>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-3">
                  Conheça Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary-800 mb-2">95%</div>
              <p className="text-gray-600">Melhoria no Rankeamento Local</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-secondary-600 mb-2">3x</div>
              <p className="text-gray-600">Aumento em Leads Qualificados</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-accent-500 mb-2">30 dias</div>
              <p className="text-gray-600">Para Ver os Primeiros Resultados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços de SEO Local
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estratégias comprovadas para posicionar sua empresa no topo dos resultados locais do Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Google Business Profile</h3>
                <p className="text-gray-600 mb-4">
                  Otimização completa do seu perfil comercial no Google para máxima visibilidade local.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Criação e verificação do perfil</li>
                  <li>• Gestão de reviews e avaliações</li>
                  <li>• Postagens estratégicas</li>
                  <li>• Otimização para Google Maps</li>
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
                  Estratégias técnicas de SEO focadas em resultados locais e palavras-chave geográficas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pesquisa de palavras-chave locais</li>
                  <li>• Otimização técnica on-page</li>
                  <li>• Link building local</li>
                  <li>• Citações e diretórios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <ArrowDown className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultoria Personalizada</h3>
                <p className="text-gray-600 mb-4">
                  Análise detalhada da sua presença online com estratégias customizadas para seu negócio.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Auditoria completa de SEO</li>
                  <li>• Análise da concorrência</li>
                  <li>• Plano de ação estratégico</li>
                  <li>• Monitoramento contínuo</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white">
                Ver Todos os Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Dominar os Resultados Locais do Google?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Vamos analisar sua presença online atual e criar uma estratégia personalizada 
              para posicionar seu negócio no topo dos resultados locais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-3">
                  Solicitar Consultoria Gratuita
                </Button>
              </Link>
              <Link to="/depoimentos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-3">
                  Ver Casos de Sucesso
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
