import React from "react";
import { MapPin, Calendar, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-16 mb-12 text-center lg:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold flex justify-center lg:justify-start items-center mb-4">
                <span className="mr-2">🌵</span>
                <span>Mostra Semiárido Digital</span>
              </h2>
              <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
                O maior evento de inovação, tecnologia e empreendedorismo do
                semiárido piauiense.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center w-full">
              <div>
                <h3 className="text-lg font-semibold mb-4">Informações</h3>
                <ul className="space-y-3">
                  <li className="flex items-start justify-center sm:justify-start">
                    <MapPin className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 max-w-xs">
                      IFPI Campus Picos – Av. Pedro Marques de Medeiros, Parque
                      Industrial – Picos/PI
                    </span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Calendar className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">07 de Agosto de 2025</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <Mail className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <a
                      href="mailto:aislanrafael@ifpi.edu.br"
                      className="text-gray-300 hover:text-white transition duration-200"
                    >
                      aislanrafael@ifpi.edu.br
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#sobre"
                      className="text-gray-300 hover:text-white transition duration-200"
                    >
                      Sobre o Evento
                    </a>
                  </li>
                  <li>
                    <a
                      href="#programacao"
                      className="text-gray-300 hover:text-white transition duration-200"
                    >
                      Programação
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submissao"
                      className="text-gray-300 hover:text-white transition duration-200"
                    >
                      Submissão de Projetos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#publico"
                      className="text-gray-300 hover:text-white transition duration-200"
                    >
                      Público-Alvo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#inscricao"
                      className="text-gray-300 hover:text-white transition duration-200"
                    >
                      Inscrições
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 w-full text-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mostra Semiárido Digital. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
