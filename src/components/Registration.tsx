import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log({ name, email });
    // Show success message
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  return (
    <section id="inscricao" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Inscrição Gratuita</h2>
              <div className="w-20 h-1 bg-green-600 mb-6"></div>
              
              <p className="text-gray-700 mb-8">
                Garanta sua vaga! O evento é 100% gratuito e com vagas limitadas. 
                Após se inscrever, você receberá um e-mail com todas as orientações.
              </p>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start mb-6">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900">Inscrição realizada com sucesso!</h4>
                    <p className="text-green-700 text-sm">
                      Verifique seu e-mail para confirmar sua inscrição e receber mais informações.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 outline-none"
                      placeholder="Digite seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 outline-none"
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                    >
                      📝 Fazer Inscrição
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">O que você receberá?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-3 text-green-600">✓</div>
                    <span className="text-gray-700">Acesso a todas as palestras e atividades</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 text-green-600">✓</div>
                    <span className="text-gray-700">Material digital do evento</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 text-green-600">✓</div>
                    <span className="text-gray-700">Certificado de participação</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 text-green-600">✓</div>
                    <span className="text-gray-700">Networking com profissionais da área</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-orange-500 to-amber-600 p-8 md:p-12 text-white flex flex-col justify-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-6">Por que participar?</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1">Conhecimento exclusivo</h4>
                      <p className="text-white/80">
                        Acesso a conteúdos de ponta sobre inovação e tecnologia no semiárido.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1">Amplie sua rede</h4>
                      <p className="text-white/80">
                        Conecte-se com pessoas que podem transformar sua carreira ou negócio.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white/20 rounded-full p-2 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-1">Oportunidades</h4>
                      <p className="text-white/80">
                        Descubra oportunidades de negócios, parcerias e financiamentos.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-white/90 italic">
                    "A MSD é uma oportunidade única para conhecer e se conectar com o que há de mais inovador no semiárido nordestino."
                  </p>
                  <p className="mt-2 font-medium">— Participante da edição anterior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;