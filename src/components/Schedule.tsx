import React from 'react';
import { Clock, Calendar, Users, Coffee, MessageSquare, Award } from 'lucide-react';

const Schedule: React.FC = () => {
  const scheduleItems = [
    {
      time: '08h30',
      title: 'Credenciamento e Abertura Oficial',
      description: 'Recepção dos participantes e cerimônia de abertura com autoridades.',
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      time: '09h00',
      title: 'Palestra Principal: Inovação e Empreendedorismo no Semiárido Digital',
      description: 'Palestra inspiradora sobre as oportunidades de inovação na região.',
      icon: <MessageSquare className="h-6 w-6 text-green-600" />
    },
    {
      time: '10h30',
      title: 'Pitch de 15 Startups Inovadoras',
      description: 'Apresentação rápida de startups locais com soluções inovadoras.',
      icon: <Clock className="h-6 w-6 text-amber-600" />
    },
    {
      time: '12h00',
      title: 'Intervalo para Almoço',
      description: 'Momento de networking e troca de experiências entre os participantes.',
      icon: <Coffee className="h-6 w-6 text-orange-600" />
    },
    {
      time: '14h00',
      title: 'Exposição de Projetos Acadêmicos e Startups',
      description: 'Mostra de projetos inovadores desenvolvidos por estudantes e empresas.',
      icon: <Calendar className="h-6 w-6 text-purple-600" />
    },
    {
      time: '16h00',
      title: 'Encerramento e Premiação',
      description: 'Cerimônia de encerramento com premiação dos melhores projetos.',
      icon: <Award className="h-6 w-6 text-red-600" />
    }
  ];

  return (
    <section id="programacao" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Programação do Dia 08 de Agosto de 2025</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Uma programação completa com palestras, apresentações e networking para impulsionar o ecossistema de inovação do semiárido.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            {/* Schedule items */}
            <div className="space-y-12">
              {scheduleItems.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div 
                      className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                        index % 3 === 0 ? 'border-green-500' : 
                        index % 3 === 1 ? 'border-amber-500' : 'border-blue-500'
                      } transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="flex items-center mb-3">
                        <div className="mr-3 p-2 rounded-full bg-gray-100">
                          {item.icon}
                        </div>
                        <span className="text-xl font-bold text-gray-900">{item.time}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-24 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-green-600 border-4 border-white flex items-center justify-center text-white font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;