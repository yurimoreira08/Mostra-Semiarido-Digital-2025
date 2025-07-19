import React from 'react';

const Organizers: React.FC = () => {
  const organizers = [
    {
      name: 'IFPI',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      role: 'Realizador'
    },
    {
      name: 'Mambee',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      role: 'Apoio'
    },
    {
      name: 'Guaribas Valley',
      image: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      role: 'Apoio'
    },
    {
      name: 'UFPI',
      image: 'https://images.pexels.com/photos/8867265/pexels-photo-8867265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      role: 'Apoio'
    },
    {
      name: 'SEBRAE',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      role: 'Apoio'
    }
  ];

  return (
    <section id="organizadores" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Realização</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            O evento é promovido pelo Instituto Federal do Piauí (IFPI) – Campus Picos, 
            com apoio das iniciativas Mambee, Guaribas Valley, Vale do Mel, UFPI e SEBRAE.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {organizers.map((org, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                <img 
                  src={org.image} 
                  alt={org.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{org.name}</h3>
              <p className="text-sm text-gray-600">{org.role}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-green-50 rounded-xl p-8 border border-green-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Quer ser um parceiro do evento?
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Entre em contato conosco para conhecer as oportunidades de parceria e como sua 
              instituição pode fazer parte deste evento que está transformando o ecossistema de 
              inovação do semiárido.
            </p>
            <div className="text-center">
              <a 
                href="mailto:aislanrafael@ifpi.edu.br" 
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;