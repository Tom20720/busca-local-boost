
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
        description: "Entraremos em contato em até 24 horas para agendar sua consultoria gratuita.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de SEO Local da Busca Local Pro. Podem me ajudar a melhorar minha presença online?"
  );

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos Conversar sobre Seu SEO Local
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Consultoria gratuita para analisar sua presença online e criar uma estratégia personalizada
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary-800">
                      Solicite sua Consultoria Gratuita
                    </CardTitle>
                    <p className="text-gray-600">
                      Preencha o formulário e receba uma análise personalizada 
                      da sua presença online atual, sem compromisso.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
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
                          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            type="tel"
                            required
                            placeholder="(11) 99999-9999"
                            className="mt-1"
                          />
                        </div>
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

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="business">Nome da empresa *</Label>
                          <Input 
                            id="business" 
                            name="business"
                            required
                            placeholder="Nome do seu negócio"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="segment">Segmento de atuação *</Label>
                          <Select name="segment" required>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Selecione seu segmento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="restaurante">Restaurante/Gastronomia</SelectItem>
                              <SelectItem value="saude">Saúde/Medicina</SelectItem>
                              <SelectItem value="juridico">Jurídico/Advocacia</SelectItem>
                              <SelectItem value="estetica">Beleza/Estética</SelectItem>
                              <SelectItem value="contabilidade">Contabilidade</SelectItem>
                              <SelectItem value="servicos">Serviços Gerais</SelectItem>
                              <SelectItem value="comercio">Comércio/Varejo</SelectItem>
                              <SelectItem value="outros">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="city">Cidade onde atua *</Label>
                        <Input 
                          id="city" 
                          name="city"
                          required
                          placeholder="Cidade - Estado"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="website">Site atual (se tiver)</Label>
                        <Input 
                          id="website" 
                          name="website"
                          type="url"
                          placeholder="https://seusite.com.br"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="challenge">Qual seu maior desafio atual? *</Label>
                        <Select name="challenge" required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Selecione seu principal desafio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nao-apareco">Não apareço no Google</SelectItem>
                            <SelectItem value="poucos-clientes">Poucos clientes me encontram online</SelectItem>
                            <SelectItem value="concorrencia">Concorrência aparece antes de mim</SelectItem>
                            <SelectItem value="google-maps">Não apareço no Google Maps</SelectItem>
                            <SelectItem value="reviews">Poucas avaliações/reviews</SelectItem>
                            <SelectItem value="site-antigo">Site desatualizado</SelectItem>
                            <SelectItem value="outros">Outros desafios</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem adicional</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          placeholder="Conte-nos mais sobre seu negócio e seus objetivos..."
                          className="mt-1"
                          rows={4}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary-800 hover:bg-primary-900 text-white text-lg py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Solicitar Consultoria Gratuita"}
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
                      Prefere conversar no WhatsApp?
                    </h3>
                    <p className="mb-6">
                      Fale conosco agora mesmo e tire todas as suas dúvidas 
                      sobre SEO local e Google Business Profile
                    </p>
                    <a 
                      href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100">
                        Chamar no WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-800">
                      O que você recebe na consultoria gratuita:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-3">✓</span>
                        <span><strong>Análise completa</strong> da sua presença online atual</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-3">✓</span>
                        <span><strong>Auditoria do Google Business Profile</strong> (se existir)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-3">✓</span>
                        <span><strong>Análise da concorrência</strong> local</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-3">✓</span>
                        <span><strong>Identificação das melhores oportunidades</strong> de SEO</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-3">✓</span>
                        <span><strong>Plano estratégico personalizado</strong> para seu negócio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-3">✓</span>
                        <span><strong>Projeção de resultados</strong> e investimento necessário</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-800">
                      Perguntas Frequentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Quanto tempo leva para ver resultados?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Os primeiros resultados começam a aparecer entre 15-30 dias. 
                        Resultados significativos geralmente ocorrem em 60-90 dias.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Vocês trabalham com qualquer tipo de negócio?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Sim! Temos experiência em diversos segmentos: saúde, gastronomia, 
                        serviços, varejo, jurídico e muito mais.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        A consultoria é realmente gratuita?
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Sim, 100% gratuita e sem compromisso. Queremos que você 
                        conheça nosso trabalho antes de tomar qualquer decisão.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Signals */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Por que confiar na Busca Local Pro?
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">500+</div>
                        <p className="text-gray-600">Clientes Atendidos</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">95%</div>
                        <p className="text-gray-600">Taxa de Sucesso</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">5+</div>
                        <p className="text-gray-600">Anos de Experiência</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-800 mb-1">24h</div>
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
