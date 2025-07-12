
import { Link } from "react-router-dom";
import { Search, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold">Busca Local Pro</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Busca Local Pro Agência de SEO - Especialistas em como melhorar sua empresa no Google. 
              Agência de marketing digital focada em resultados locais em Guarulhos SP.
            </p>
            
            {/* NAP Information - Updated */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-500 mt-1" />
                <div>
                  <p className="text-sm text-gray-300 font-semibold">Busca Local Pro Agência de SEO</p>
                  <p className="text-sm text-gray-300">Rua Brejo Grande, 280</p>
                  <p className="text-sm text-gray-300">CEP: 07273-180, Guarulhos/SP</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-500" />
                <div>
                  <p className="text-sm text-gray-300">(11) 91376-9295</p>
                  <a 
                    href="https://wa.me/5511913769295?text=Olá! Quero saber como melhorar minha empresa no Google"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-400 hover:text-accent-300"
                  >
                    WhatsApp: (11) 91376-9295
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-500" />
                <a 
                  href="mailto:comercial@buscalocalpro.com.br"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  comercial@buscalocalpro.com.br
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              © 2024 Busca Local Pro Agência de SEO. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Como Melhorar no Google
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre a Agência
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato Guarulhos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços SEO Guarulhos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Como Melhorar Empresa no Google</li>
              <li>Google Business Profile Guarulhos</li>
              <li>SEO Local Especializado</li>
              <li>Marketing Digital Guarulhos</li>
              <li>Consultoria SEO Presencial</li>
              <li>Agência SEO Guarulhos SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Agência de Marketing Digital especializada em SEO Local - Como melhorar sua empresa no Google | Guarulhos SP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
