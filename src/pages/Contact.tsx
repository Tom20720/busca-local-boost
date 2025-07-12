
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Star, CheckCircle, Clock, Award } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 2 horas para mostrar como melhorar sua empresa no Google!",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Quero saber como melhorar minha empresa no Google com a Busca Local Pro Agência de SEO em Guarulhos. Podem me ajudar?"
  );

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como Melhorar Minha Empresa no Google: Consultoria Gratuita
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Busca Local Pro Agência de SEO em Guarulhos SP - Especialistas em posicionamento no Google
            </p>
          </div>
        </div>
      </section>

      {/* NAP Section - Updated */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Busca Local Pro Agência de SEO - Guarulhos SP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Nosso Endereço</h3>
                  <p className="text-gray-600 font-semibold">Busca Local Pro Agência de SEO</p>
                  <p className="text-gray-600">Rua Brejo Grande, 280</p>
                  <p className="text-gray-600">CEP: 07273-180</p>
                  <p className="text-gray-600">Guarulhos/SP</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Telefone e WhatsApp</h3>
                  <p className="text-gray-600 font-semibold">(11) 91376-9295</p>
                  <a 
                    href={`https://wa.me/5511913769295?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 text-sm block mt-1"
                  >
                    Clique para WhatsApp
                  </a>
                  <p className="text-gray-600 text-sm">Seg à Sex: 8h às 18h</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-primary-800 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">E-mail Comercial</h3>
                  <a 
                    href="mailto:comercial@buscalocalpro.com.br"
                    className="text-gray-600 hover:text-primary-800 font-semibold"
                  >
                    comercial@buscalocalpro.com.br
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Resposta em até 2h</p>
                  <p className="text-gray-600 text-sm">Consultoria gratuita</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form - Optimized as requested */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary-800">
                      Descubra Como Melhorar Sua Empresa no Google - Grátis
                    </CardTitle>
                    <p className="text-gray-600">
                      Preencha o formulário e receba uma consultoria personalizada sobre como melhorar 
                      sua empresa no Google com nossa equipe especializada em Guarulhos.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      <div>
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input 
                          id="name" 
                          name="name"
                          required
                          placeholder="Seu nome completo"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="city">Cidade e Estado *</Label>
                        <Input 
                          id="city" 
                          name="city"
                          required
                          placeholder="Ex: Guarulhos, São Paulo"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Assunto *</Label>
                        <Select name="subject" required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="como-melhorar-google">Como melhorar minha empresa no Google</SelectItem>
                            <SelectItem value="seo-local">SEO Local para minha empresa</SelectItem>
                            <SelectItem value="google-business">Otimização Google Business Profile</SelectItem>
                            <SelectItem value="consultoria">Consultoria SEO completa</SelectItem>
                            <SelectItem value="site-novo">Criação de site otimizado</SelectItem>
                            <SelectItem value="outros">Outros serviços</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary-800 hover:bg-primary-900 text-white text-lg py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Quero Melhorar Minha Empresa no Google"}
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        * Campos obrigatórios. Seus dados estão seguros conosco.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                
                {/* WhatsApp CTA */}
                <Card className="bg-secondary-600 text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      WhatsApp Direto - Guarulhos SP
                    </h3>
                    <p className="mb-6">
                      Fale agora com nossa equipe especializada e descubra como melhorar sua empresa 
                      no Google de forma rápida e eficaz. Atendimento personalizado em Guarulhos.
                    </p>
                    <a 
                      href={`https://wa.me/5511913769295?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100">
                        Chamar no WhatsApp (11) 91376-9295
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-800">
                      O que você recebe na consultoria gratuita:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-1" />
                        <span><strong>Análise completa</strong> de como melhorar sua empresa no Google</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-1" />
                        <span><strong>Auditoria gratuita</strong> do seu Google Business Profile</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-1" />
                        <span><strong>Análise da concorrência</strong> local em Guarulhos</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-1" />
                        <span><strong>Plano estratégico personalizado</strong> para sua empresa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-1" />
                        <span><strong>Identificação das melhores oportunidades</strong> de SEO local</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-1" />
                        <span><strong>Reunião presencial</strong> em nosso escritório (opcional)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-800">
                      Por que escolher a Busca Local Pro?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-accent-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Especialistas Locais em Guarulhos
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Conhecemos o mercado local e sabemos exatamente como melhorar sua empresa 
                          no Google para atrair clientes da região.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-accent-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Resultados em 15-30 dias
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Nossa metodologia comprovada garante que você veja melhorias no Google 
                          em poucos dias, com resultados significativos em até 90 dias.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-accent-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Atendimento Presencial
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Nosso escritório fica em Guarulhos. Oferecemos reuniões presenciais 
                          para alinhamento e acompanhamento personalizado.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Signals */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Busca Local Pro Agência de SEO - Guarulhos
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">500+</div>
                        <p className="text-gray-600">Empresas Melhoradas no Google</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">5+</div>
                        <p className="text-gray-600">Anos em Guarulhos</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">95%</div>
                        <p className="text-gray-600">Taxa de Sucesso</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">2h</div>
                        <p className="text-gray-600">Tempo de Resposta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
