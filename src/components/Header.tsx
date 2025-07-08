
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f5ba5ef1-9386-4094-b72d-86626a07794a.png" 
              alt="Busca Local Pro - SEO Local em Guarulhos" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-primary-800">
              Busca Local Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-800 font-medium transition-colors">
              Início
            </Link>
            <Link to="/servicos" className="text-gray-700 hover:text-primary-800 font-medium transition-colors">
              Serviços
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-primary-800 font-medium transition-colors">
              Sobre
            </Link>
            <Link to="/contato">
              <Button className="bg-primary-800 hover:bg-primary-900 text-white">
                Contato
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-800 font-medium">
                Início
              </Link>
              <Link to="/servicos" className="text-gray-700 hover:text-primary-800 font-medium">
                Serviços
              </Link>
              <Link to="/sobre" className="text-gray-700 hover:text-primary-800 font-medium">
                Sobre
              </Link>
              <Link to="/contato" className="text-gray-700 hover:text-primary-800 font-medium">
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
