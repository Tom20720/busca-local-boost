
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
              Especialistas em SEO Local e Google Business Profile em Guarulhos. 
              Posicionamos sua empresa no topo dos resultados locais do Google.
            </p>
            
            {/* NAP Information */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span className="text-sm text-gray-300">Rua das Palmeiras, 123 - Centro, Guarulhos - SP, 07010-000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-500" />
                <span className="text-sm text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-500" />
                <span className="text-sm text-gray-300">contato@buscalocalpro.com.br</span>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              © 2024 Busca Local Pro. Todos os direitos reservados.
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
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços SEO Guarulhos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Google Business Profile Guarulhos</li>
              <li>SEO Local Guarulhos</li>
              <li>Consultoria SEO Regional</li>
              <li>Copywriting Persuasivo</li>
              <li>Análise de Presença Online</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            SEO Local especializado em Guarulhos - Desenvolvido com foco em rankeamento máximo no Google
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
