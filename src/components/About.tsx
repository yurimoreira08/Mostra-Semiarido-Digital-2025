import React from 'react';
import { LightbulbIcon } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-70"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 p-1 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-white p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <LightbulbIcon className="h-10 w-10 text-amber-600 mb-2" />
                      <h4 className="font-semibold text-gray-900">Inovação</h4>
                      <p className="text-sm text-gray-700">Soluções criativas para desafios regionais</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <h4 className="font-semibold text-gray-900">Tecnologia</h4>
                      <p className="text-sm text-gray-700">Digitalização do semiárido</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h4 className="font-semibold text-gray-900">Empreendedorismo</h4>
                      <p className="text-sm text-gray-700">Negócios com impacto local</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h4 className="font-semibold text-gray-900">Networking</h4>
                      <p className="text-sm text-gray-700">Conexões que transformam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">O que é a MSD?</h2>
              <div className="w-20 h-1 bg-green-600 mb-6"></div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Mostra Semiárido Digital (MSD) é um evento que celebra a inovação no coração do sertão. 
                Reunindo estudantes, startups, pesquisadores e instituições, a MSD fortalece o ecossistema 
                do Vale do Mel ao mostrar que o semiárido também é digital, inovador e sustentável.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Na edição de 2025, o evento acontece em Picos-PI, no IFPI Campus Picos, com uma programação 
                intensa de palestras, pitchs de startups, exposição de projetos acadêmicos e muito networking.
              </p>
              
              <div className="flex flex-wrap items-center text-sm text-gray-600">
                <div className="flex items-center mr-8 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Palestras inspiradoras</span>
                </div>
                <div className="flex items-center mr-8 mb-4">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span>Startups inovadoras</span>
                </div>
                <div className="flex items-center mr-8 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Projetos acadêmicos</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span>Oportunidades de conexão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;