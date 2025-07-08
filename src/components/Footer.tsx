
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

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
              Especialistas em SEO Local e Google Business Profile. 
              Posicionamos sua empresa no topo dos resultados locais do Google.
            </p>
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
                <Link to="/depoimentos" className="text-gray-300 hover:text-white transition-colors">
                  Depoimentos
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
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Google Business Profile</li>
              <li>SEO Local</li>
              <li>Consultoria SEO</li>
              <li>Copywriting</li>
              <li>Análise de Presença Online</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Desenvolvido com foco em SEO técnico e conversão para máximo rankeamento no Google
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
