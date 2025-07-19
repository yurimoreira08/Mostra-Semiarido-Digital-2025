import React from 'react';
import { Contact as Cactus } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-green-100 opacity-60"></div>
        <div className="absolute left-1/4 top-1/3 w-32 h-32 rounded-full bg-amber-100 opacity-40"></div>
        <div className="absolute right-1/4 bottom-1/4 w-48 h-48 rounded-full bg-orange-100 opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <Cactus className="text-green-600 mr-3" size={36} />
            <span className="text-lg font-medium text-green-800 bg-green-100 px-3 py-1 rounded-full">
              08 de Agosto de 2025
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            <span className="inline-block">🌵 Mostra Semiárido</span>{" "}
            <span className="inline-block text-green-700">Digital 2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto animate-fade-in-delayed">
            O maior evento de inovação, tecnologia e empreendedorismo do semiárido piauiense.
          </p>
          
          <div className="animate-bounce-subtle">
            <a 
              href="#inscricao" 
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ✅ Inscreva-se Gratuitamente
            </a>
          </div>
          
          <div className="mt-12 text-gray-600 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>IFPI Campus Picos, Piauí</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Evento Gratuito</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;