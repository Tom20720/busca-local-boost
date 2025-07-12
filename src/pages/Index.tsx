
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, ArrowUp, ArrowDown, MapPin, Phone, Mail, Star, Users, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <WhatsAppButton />
      
      {/* Main Title Section - SEO Optimized */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-accent-400">
              Agência de Marketing Digital Especializada em SEO - Guarulhos SP
            </h1>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Como Melhorar Minha <span className="text-accent-500">Empresa no Google</span> com Resultados Comprovados
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Descubra como melhorar sua empresa no Google e dominar os resultados locais em Guarulhos. 
              Nossa agência especializada em SEO já ajudou centenas de empresas a multiplicar seus resultados online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contato">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-3">
                  Quero Melhorar Minha Empresa no Google
                </Button>
              </Link>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-3">
                  Ver Como Funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NAP Information Section - Updated */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">
              Busca Local Pro Agência de SEO - Especialistas em Guarulhos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-800" />
                <div>
                  <p className="font-semibold text-gray-900">Busca Local Pro Agência de SEO</p>
                  <p className="text-sm text-gray-600">Rua Brejo Grande, 280</p>
                  <p className="text-sm text-gray-600">CEP: 07273-180, Guarulhos/SP</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-primary-800" />
                <div>
                  <p className="font-semibold text-gray-900">(11) 91376-9295</p>
                  <p className="text-sm text-gray-600">WhatsApp e Telefone</p>
                  <a 
                    href="https://wa.me/5511913769295?text=Olá! Quero saber como melhorar minha empresa no Google"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-600 hover:text-accent-700"
                  >
                    Clique para WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-primary-800" />
                <div>
                  <p className="font-semibold text-gray-900">comercial@buscalocalpro.com.br</p>
                  <p className="text-sm text-gray-600">Consultoria Gratuita</p>
                  <p className="text-sm text-gray-600">Resposta em até 2h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Melhorar Empresa no Google - Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Como Melhorar Minha Empresa no Google: Guia Completo
            </h2>
            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-6 text-center">
                Se você está se perguntando "como melhorar minha empresa no Google", chegou ao lugar certo. 
                Nossa agência em Guarulhos SP possui metodologia comprovada para posicionar seu negócio no topo dos resultados.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mr-2" />
                    Estratégias Comprovadas
                  </h3>
                  <p className="text-gray-600">
                    Implementamos técnicas avançadas de SEO local que realmente funcionam para empresas 
                    em Guarulhos, focando em como melhorar sua empresa no Google de forma sustentável.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-6 w-6 text-accent-500 mr-2" />
                    Resultados Rápidos
                  </h3>
                  <p className="text-gray-600">
                    Nossos clientes começam a ver melhorias em suas posições no Google em apenas 15-30 dias, 
                    com resultados significativos em até 90 dias.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 text-primary-800 mr-2" />
                    Atendimento Local
                  </h3>
                  <p className="text-gray-600">
                    Equipe especializada em Guarulhos que entende o mercado local e sabe exatamente 
                    como melhorar sua empresa no Google para atrair clientes da região.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-6 w-6 text-secondary-600 mr-2" />
                    Suporte Contínuo
                  </h3>
                  <p className="text-gray-600">
                    Acompanhamento mensal com relatórios detalhados mostrando como sua empresa 
                    está melhorando no Google mês a mês.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empresas Que Já Melhoraram no Google Conosco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reais de empresas de Guarulhos que descobriram como melhorar no Google
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary-800 mb-2">95%</div>
              <p className="text-gray-600">Melhoria no Posicionamento Local</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-secondary-600 mb-2">3x</div>
              <p className="text-gray-600">Aumento em Leads Qualificados</p>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-accent-500 mb-2">30 dias</div>
              <p className="text-gray-600">Para Primeiros Resultados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços: Como Melhorar Sua Empresa no Google
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estratégias personalizadas para cada tipo de negócio em Guarulhos
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
                  Otimização completa do seu perfil no Google para aparecer quando clientes procuram 
                  como melhorar empresas como a sua em Guarulhos.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Verificação e otimização completa</li>
                  <li>• Gestão de avaliações e reviews</li>
                  <li>• Postagens estratégicas regulares</li>
                  <li>• Fotos e vídeos otimizados</li>
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
                  Técnicas avançadas de SEO focadas em melhorar sua empresa no Google 
                  para buscas locais em Guarulhos e região.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Palavras-chave locais otimizadas</li>
                  <li>• Otimização técnica completa</li>
                  <li>• Link building local estratégico</li>
                  <li>• Citações em diretórios regionais</li>
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
                  Análise detalhada e plano personalizado mostrando exatamente como 
                  melhorar sua empresa no Google passo a passo.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Auditoria completa gratuita</li>
                  <li>• Análise da concorrência local</li>
                  <li>• Plano de ação detalhado</li>
                  <li>• Acompanhamento mensal</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900 text-white">
                Ver Como Melhorar Minha Empresa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Optimized */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Perguntas Frequentes: Como Melhorar Minha Empresa no Google
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Como posso melhorar minha empresa no Google rapidamente?
                </h3>
                <p className="text-gray-600">
                  Para melhorar sua empresa no Google rapidamente, foque primeiro no Google Business Profile, 
                  otimize seu site para SEO local, colete avaliações positivas e mantenha informações 
                  consistentes em todos os diretórios online. Nossa equipe em Guarulhos pode acelerar esse processo.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quanto tempo leva para melhorar no Google?
                </h3>
                <p className="text-gray-600">
                  Os primeiros resultados de como melhorar sua empresa no Google aparecem entre 15-30 dias. 
                  Melhorias significativas ocorrem em 60-90 dias, dependendo da concorrência local em 
                  Guarulhos e do estado atual da sua presença online.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Por que escolher especialistas locais de Guarulhos?
                </h3>
                <p className="text-gray-600">
                  Especialistas locais conhecem o mercado de Guarulhos, os hábitos de busca da região 
                  e as melhores estratégias para melhorar sua empresa no Google especificamente para 
                  seu público-alvo local. Isso resulta em melhores e mais rápidos resultados.
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
              Pronto para Melhorar Sua Empresa no Google?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Não deixe sua concorrência ficar na frente. Nossa equipe em Guarulhos está 
              pronta para criar uma estratégia personalizada e mostrar como melhorar sua 
              empresa no Google de forma eficaz e duradoura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-3">
                  Quero Melhorar no Google Agora
                </Button>
              </Link>
              <a 
                href="https://wa.me/5511913769295?text=Olá! Quero saber como melhorar minha empresa no Google"
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
