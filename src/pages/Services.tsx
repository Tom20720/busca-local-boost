
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, ArrowUp, ArrowDown } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços de SEO Local Especializado
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Soluções completas para posicionar sua empresa no topo dos resultados locais do Google
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Google Business Profile */}
          <div className="max-w-6xl mx-auto mb-20">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary-50 pb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-800 rounded-lg flex items-center justify-center mr-4">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-primary-800 mb-2">
                      Otimização de Google Business Profile
                    </CardTitle>
                    <p className="text-lg text-gray-600">
                      Seu perfil comercial otimizado para máxima visibilidade no Google Maps
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">O que fazemos:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary-800 mr-2">✓</span>
                        <span><strong>Criação e Verificação:</strong> Configuração completa do perfil com todas as informações necessárias</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-800 mr-2">✓</span>
                        <span><strong>Gestão de Reviews:</strong> Estratégias para obter mais avaliações positivas e responder adequadamente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-800 mr-2">✓</span>
                        <span><strong>Postagens Estratégicas:</strong> Conteúdo otimizado para engajamento e conversão</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-800 mr-2">✓</span>
                        <span><strong>Otimização de Fotos:</strong> Imagens profissionais que aumentam a confiança dos clientes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-800 mr-2">✓</span>
                        <span><strong>Monitoramento Contínuo:</strong> Acompanhamento de métricas e ajustes constantes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Resultados esperados:</h3>
                    <div className="bg-secondary-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Aumento de 300% na visibilidade local</li>
                        <li>• Mais cliques no site e ligações</li>
                        <li>• Melhoria na classificação no Maps</li>
                        <li>• Aumento nas avaliações positivas</li>
                        <li>• Mais visitas físicas ao estabelecimento</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SEO Local */}
          <div className="max-w-6xl mx-auto mb-20">
            <Card className="overflow-hidden">
              <CardHeader className="bg-secondary-50 pb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-secondary-600 rounded-lg flex items-center justify-center mr-4">
                    <ArrowUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-secondary-600 mb-2">
                      Consultoria SEO Local
                    </CardTitle>
                    <p className="text-lg text-gray-600">
                      Estratégias técnicas avançadas para dominar os resultados locais
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Nossa metodologia:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">✓</span>
                        <span><strong>Pesquisa de Palavras-chave Locais:</strong> Identificação das melhores oportunidades geográficas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">✓</span>
                        <span><strong>Otimização On-page:</strong> Estrutura técnica perfeita para SEO local</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">✓</span>
                        <span><strong>Link Building Local:</strong> Construção de autoridade através de backlinks relevantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">✓</span>
                        <span><strong>Citações NAP:</strong> Consistência de dados em diretórios e plataformas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">✓</span>
                        <span><strong>Conteúdo Geolocalizado:</strong> Páginas otimizadas para cada região de atuação</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Incluído no pacote:</h3>
                    <div className="bg-primary-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Auditoria técnica completa</li>
                        <li>• Análise detalhada da concorrência</li>
                        <li>• Plano estratégico personalizado</li>
                        <li>• Implementação técnica</li>
                        <li>• Relatórios mensais de performance</li>
                        <li>• Suporte contínuo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Copywriting */}
          <div className="max-w-6xl mx-auto mb-20">
            <Card className="overflow-hidden">
              <CardHeader className="bg-accent-50 pb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-accent-600 rounded-lg flex items-center justify-center mr-4">
                    <ArrowDown className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-accent-600 mb-2">
                      Copywriting Persuasivo
                    </CardTitle>
                    <p className="text-lg text-gray-600">
                      Textos que convertem visitantes em clientes e ranqueiam no Google
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Nosso processo:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-accent-600 mr-2">✓</span>
                        <span><strong>Análise do Público-alvo:</strong> Entendimento profundo dos seus clientes ideais</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-600 mr-2">✓</span>
                        <span><strong>Pesquisa de Palavras-chave:</strong> Integração de termos de alta conversão</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-600 mr-2">✓</span>
                        <span><strong>Headlines Magnéticas:</strong> Títulos que capturam atenção e geram cliques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-600 mr-2">✓</span>
                        <span><strong>CTAs Estratégicos:</strong> Chamadas para ação que maximizam conversões</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-600 mr-2">✓</span>
                        <span><strong>Otimização SEO:</strong> Textos que ranqueiam e convertem simultaneamente</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Aplicações:</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Páginas de serviços otimizadas</li>
                        <li>• Landing pages de alta conversão</li>
                        <li>• Conteúdo para blog/artigos</li>
                        <li>• Descrições para Google Business</li>
                        <li>• E-mails marketing</li>
                        <li>• Anúncios Google Ads</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Análise */}
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gray-100 pb-8">
                <CardTitle className="text-3xl text-gray-800 text-center mb-2">
                  Análise de Presença Online
                </CardTitle>
                <p className="text-lg text-gray-600 text-center">
                  Diagnóstico completo da sua presença digital com plano de ação detalhado
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-3">Auditoria Técnica</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Análise de SEO on-page</li>
                      <li>Velocidade de carregamento</li>
                      <li>Mobile-first indexing</li>
                      <li>Estrutura de dados</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-3">Análise Competitiva</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Benchmarking de concorrentes</li>
                      <li>Gap de palavras-chave</li>
                      <li>Oportunidades de mercado</li>
                      <li>Estratégias dos líderes</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-3">Plano de Ação</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Priorização de melhorias</li>
                      <li>Cronograma de implementação</li>
                      <li>Métricas de acompanhamento</li>
                      <li>Projeção de resultados</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Dominar o SEO Local?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Vamos criar uma estratégia personalizada para posicionar sua empresa 
              no topo dos resultados locais do Google.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-3">
                Solicitar Proposta Personalizada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
