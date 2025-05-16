
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">InvestSavy</h3>
            <p className="text-primary-foreground/90">
              Ajudamos você a entender o mundo dos investimentos e a tomar decisões financeiras inteligentes.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-accent transition">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-accent transition">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-accent transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/90 hover:text-white transition">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-foreground/90 hover:text-white transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-primary-foreground/90 hover:text-white transition">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-white transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/ferramentas" className="text-primary-foreground/90 hover:text-white transition">
                  Ferramentas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-white transition">
                  Consultoria Financeira
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-white transition">
                  Educação Financeira
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-white transition">
                  Análise de Mercado
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/90 hover:text-white transition">
                  Recomendações de Investimento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-primary-foreground/90">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-primary-foreground/90">contato@investsavy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} InvestSavy. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
