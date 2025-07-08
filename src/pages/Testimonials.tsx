
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Restaurante Sabor Caseiro",
      location: "São Paulo, SP",
      result: "300% mais clientes",
      testimonial: "Após 2 meses trabalhando com a Busca Local Pro, nosso restaurante aparece em primeiro lugar no Google Maps da região. O número de novos clientes triplicou e nossa receita aumentou significativamente. A otimização do Google Business Profile foi fundamental para esse resultado.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      business: "Clínica Dra. Ana Fisioterapia",
      location: "Rio de Janeiro, RJ",
      result: "500% mais agendamentos",
      testimonial: "Profissionais excepcionais! Em apenas 6 semanas, minha clínica saiu da segunda página do Google para a primeira posição em várias palavras-chave locais. Os agendamentos aumentaram 500% e agora tenho uma lista de espera. Recomendo sem hesitar!",
      rating: 5
    },
    {
      name: "Roberto Santos",
      business: "Santos Advocacia",
      location: "Belo Horizonte, MG",
      result: "400% mais consultas",
      testimonial: "A estratégia de SEO local da equipe transformou completamente minha presença online. Agora sou encontrado facilmente por quem procura advogado na minha região. O investimento se pagou em menos de 3 meses com o aumento exponencial de consultas.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      business: "Beleza & Estética Marina",
      location: "Curitiba, PR",
      result: "250% mais clientes",
      testimonial: "Resultado incrível! Antes praticamente não aparecia no Google, hoje sou a primeira opção quando alguém busca por estética facial na minha cidade. O trabalho no Google Business Profile foi perfeito - mais avaliações, mais fotos e muito mais visibilidade.",
      rating: 5
    },
    {
      name: "João Ferreira",
      business: "Ferreira Contabilidade",
      location: "Fortaleza, CE",
      result: "350% mais leads",
      testimonial: "Trabalho sério e resultados comprovados. Em 3 meses, meu escritório de contabilidade passou a receber 350% mais contatos qualificados. A estratégia de conteúdo local e otimização técnica foram fundamentais. Parceria de longo prazo garantida!",
      rating: 5
    },
    {
      name: "Patricia Lima",
      business: "Pet Shop Amor Animal",
      location: "Salvador, BA",
      result: "280% mais vendas",
      testimonial: "Superou todas as expectativas! Nosso pet shop agora é referência na região. As vendas aumentaram 280% e constantemente recebemos novos clientes que nos encontraram pelo Google. O trabalho de otimização local foi perfeito do início ao fim.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Restaurante Local: De Invisível a Nº1 no Google Maps",
      category: "Gastronomia",
      challenge: "Restaurante tradicional com 15 anos de história, mas sem presença online. Não aparecia nas buscas locais e dependia apenas do boca a boca.",
      solution: "Otimização completa do Google Business Profile, criação de conteúdo local, gestão de avaliações e implementação de SEO local técnico.",
      results: [
        "Posição #1 no Google Maps para 'restaurante [cidade]'",
        "Aumento de 400% no tráfego local",
        "300% mais reservas em 90 dias",
        "Nota 4.9 estrelas com 150+ avaliações"
      ],
      timeframe: "3 meses"
    },
    {
      title: "Clínica Médica: Dominando Múltiplas Especialidades",
      category: "Saúde",
      challenge: "Clínica com várias especialidades, mas baixa visibilidade online. Concorrência acirrada com grandes redes médicas da região.",
      solution: "Estratégia multi-local, otimização para cada especialidade, criação de conteúdo educativo e gestão avançada de citações médicas.",
      results: [
        "Top 3 em 12 especialidades médicas",
        "500% mais agendamentos online",
        "Redução de 60% no custo por aquisição",
        "Autoridade estabelecida em conteúdo médico local"
      ],
      timeframe: "4 meses"
    },
    {
      title: "Escritório de Advocacia: Autoridade em Direito Local",
      category: "Jurídico",
      challenge: "Advogado recém-formado competindo com escritórios estabelecidos há décadas. Zero visibilidade online e sem clientes.",
      solution: "Construção de autoridade através de conteúdo jurídico local, otimização para consultas específicas e networking digital estratégico.",
      results: [
        "Posição #1 para 'advogado [especialidade] [cidade]'",
        "450% aumento em consultas qualificadas",
        "Reconhecimento como especialista local",
        "ROI de 800% em 6 meses"
      ],
      timeframe: "6 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de Sucesso Reais
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Descubra como transformamos negócios locais através de SEO estratégico
            </p>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados que Falam por Si
            </h2>
            <p className="text-lg text-gray-600">
              Números reais de clientes reais que confiaram em nossa expertise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-800 mb-2">500%</div>
              <p className="text-gray-600">Aumento Médio em Visibilidade</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-2">95%</div>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">30</div>
              <p className="text-gray-600">Dias para Primeiros Resultados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">800%</div>
              <p className="text-gray-600">ROI Médio dos Projetos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos reais de empresários que transformaram seus negócios com nossa ajuda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-primary-800 font-medium">{testimonial.business}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full font-semibold">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Estudos de Caso Detalhados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Análise profunda de como resolvemos desafios específicos em diferentes setores
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="flex items-center mb-4">
                        <span className="bg-primary-800 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          {study.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          Concluído em {study.timeframe}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Desafio:</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solução:</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Resultados Alcançados:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-secondary-600 mr-2">✓</span>
                            <span className="text-sm text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary-800 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Mais de 500 Empresas Locais Confiam em Nosso Trabalho
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Junte-se aos empresários que já transformaram seus negócios 
                  e dominam os resultados locais do Google
                </p>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div>
                    <div className="text-3xl font-bold text-accent-500 mb-2">98%</div>
                    <p className="text-blue-100 text-sm">Renovam o Contrato</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-500 mb-2">4.9★</div>
                    <p className="text-blue-100 text-sm">Avaliação Média</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-500 mb-2">24h</div>
                    <p className="text-blue-100 text-sm">Tempo de Resposta</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Ser Nosso Próximo Caso de Sucesso?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Vamos criar uma estratégia personalizada para colocar sua empresa 
              no topo dos resultados locais do Google
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100 text-lg px-8 py-3">
                  Solicitar Análise Gratuita
                </Button>
              </Link>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-600 text-lg px-8 py-3">
                  Conhecer Nossos Serviços
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

export default Testimonials;
