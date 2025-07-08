
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Especialistas em SEO Local
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Conheça a equipe por trás dos resultados que transformam negócios locais
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">Nossa Missão</h3>
                  <p className="text-gray-600">
                    Capacitar empresas locais a dominarem os resultados de busca do Google, 
                    gerando mais visibilidade, credibilidade e vendas através de estratégias 
                    de SEO local comprovadas e inovadoras.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-4">Nossa Visão</h3>
                  <p className="text-gray-600">
                    Ser reconhecida como a principal referência em SEO local no Brasil, 
                    transformando a presença online de milhares de negócios locais e 
                    democratizando o acesso a estratégias de marketing digital de alto nível.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-accent-600 mb-4">Nossos Valores</h3>
                  <p className="text-gray-600">
                    Transparência total nos processos, resultados mensuráveis e sustentáveis, 
                    atendimento personalizado e comprometimento genuíno com o sucesso 
                    de cada cliente que confia em nosso trabalho.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Experts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que Somos Especialistas em SEO Local?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa expertise foi construída através de anos de experiência prática, 
                estudos constantes e resultados comprovados no mercado brasileiro.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary-800 mb-6">
                  Nossa Expertise Inclui:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <div>
                      <strong className="text-gray-900">Certificações Google:</strong>
                      <p className="text-gray-600">Certificados em Google Ads, Google Analytics e Google Business Profile</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <div>
                      <strong className="text-gray-900">Experiência Comprovada:</strong>
                      <p className="text-gray-600">Mais de 5 anos especializados exclusivamente em SEO local e Google Business Profile</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <div>
                      <strong className="text-gray-900">Metodologia Própria:</strong>
                      <p className="text-gray-600">Processo exclusivo testado e refinado em centenas de projetos bem-sucedidos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <div>
                      <strong className="text-gray-900">Atualização Constante:</strong>
                      <p className="text-gray-600">Acompanhamos diariamente todas as mudanças nos algoritmos do Google</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                    <div>
                      <strong className="text-gray-900">Resultados Mensuráveis:</strong>
                      <p className="text-gray-600">Histórico de aumentar visibilidade local em até 400% em 90 dias</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-secondary-600 mb-6 text-center">
                  Nossos Números
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-800 mb-2">500+</div>
                    <p className="text-gray-600">Empresas Locais Atendidas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary-600 mb-2">95%</div>
                    <p className="text-gray-600">Taxa de Sucesso nos Projetos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent-600 mb-2">400%</div>
                    <p className="text-gray-600">Aumento Médio em Visibilidade</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800 mb-2">30 dias</div>
                    <p className="text-gray-600">Para Primeiros Resultados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Equipe Especializada
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profissionais altamente qualificados e focados exclusivamente em SEO local
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    SEO
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Especialistas em SEO Técnico</h3>
                  <p className="text-gray-600 mb-4">
                    Profissionais certificados com expertise em otimização técnica, 
                    análise de dados e implementação de estratégias avançadas.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Certificação Google Analytics</li>
                    <li>• Especialização em SEO Local</li>
                    <li>• Experiência em Google Business Profile</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    COPY
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Copywriters Especializados</h3>
                  <p className="text-gray-600 mb-4">
                    Redatores experientes em criar conteúdo que converte e rankeia, 
                    com foco em palavras-chave locais e persuasão.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Especialização em SEO Copywriting</li>
                    <li>• Experiência em conversão</li>
                    <li>• Domínio de pesquisa de palavras-chave</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    DATA
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analistas de Dados</h3>
                  <p className="text-gray-600 mb-4">
                    Especialistas em análise de performance, métricas de SEO local 
                    e otimização baseada em dados concretos.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Análise avançada de métricas</li>
                    <li>• Relatórios personalizados</li>
                    <li>• Otimização baseada em dados</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa Metodologia Exclusiva
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Processo comprovado em 4 etapas para garantir resultados consistentes e duradouros
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Análise Profunda</h3>
                <p className="text-blue-100 text-sm">
                  Auditoria completa da presença online atual, análise da concorrência 
                  e identificação das melhores oportunidades.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Estratégia Personalizada</h3>
                <p className="text-blue-100 text-sm">
                  Criação de plano de ação específico para seu negócio, com cronograma 
                  detalhado e metas claras de crescimento.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Implementação Técnica</h3>
                <p className="text-blue-100 text-sm">
                  Execução precisa de todas as otimizações técnicas, criação de conteúdo 
                  e configuração dos perfis comerciais.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Monitoramento Contínuo</h3>
                <p className="text-blue-100 text-sm">
                  Acompanhamento constante dos resultados, ajustes estratégicos 
                  e relatórios detalhados de performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pronto para Trabalhar com os Especialistas?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vamos conversar sobre como nossa expertise pode transformar 
              a presença online do seu negócio local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white text-lg px-8 py-3">
                  Solicitar Consultoria Gratuita
                </Button>
              </Link>
              <Link to="/depoimentos">
                <Button size="lg" variant="outline" className="border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white text-lg px-8 py-3">
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

export default About;
