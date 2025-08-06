import React from "react";
import { CheckCircle, Eye } from "lucide-react";

const SubmitProject: React.FC = () => {
  return (
    <section
      id="submissao"
      className="py-24 bg-gradient-to-br from-green-50 to-amber-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Submissão de Projetos
              </h2>
              <div className="w-20 h-1 bg-green-600 mb-6"></div>

              <p className="text-gray-700 mb-6">
                Você tem uma startup ou projeto inovador? A MSD 2025 está com
                chamada aberta para apresentação de soluções nas áreas de
                tecnologia, sustentabilidade e empreendedorismo.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modalidades:
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Pôsteres técnicos
                    </h4>
                    <p className="text-sm text-gray-700">
                      Apresente seu projeto de pesquisa ou solução técnica em
                      formato de pôster.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Pitch de Startups
                    </h4>
                    <p className="text-sm text-gray-700">
                      Apresente sua startup em um pitch de 5 minutos para
                      investidores e público.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="text-gray-700 mb-8">
                📌 Inscreva seu projeto e ganhe visibilidade para sua ideia!
              </p>

              <div className="mb-8">
                <div className="bg-white border border-amber-300 rounded-xl shadow-md p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-amber-800 mb-1">
                      📄 Edital - MSD 2025
                    </h4>
                    <p className="text-sm text-gray-700">
                      Confira todos os detalhes, critérios e prazos para
                      submissão de projetos no edital oficial do evento.
                    </p>
                  </div>
                  <a
                    href="https://docs.google.com/document/d/1hnsofFLP1G-pPiRqX9XkYUuW3_EImuSq/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition w-full sm:w-auto text-center"
                  >
                    Ver Edital
                  </a>
                </div>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/13Nivee2_sAC-La-O8tsGL8hFQPoHmA7a2o0mfJNXKEk/edit?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Eye className="mr-2 h-5 w-5" />
                🔍 Ver projetos inscritos
              </a>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-green-500 to-green-700 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Benefícios para os participantes
              </h3>

              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-xl mb-2">Visibilidade</h4>
                  <p className="text-white/90">
                    Seu projeto será visto por investidores, aceleradoras e
                    empresas parceiras do evento.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-xl mb-2">Networking</h4>
                  <p className="text-white/90">
                    Conecte-se com outros empreendedores, pesquisadores e
                    profissionais da área.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-xl mb-2">Feedback</h4>
                  <p className="text-white/90">
                    Receba feedbacks valiosos de especialistas para melhorar sua
                    solução.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-semibold text-xl mb-2">Premiação</h4>
                  <p className="text-white/90">
                    Os melhores projetos serão premiados ao final do evento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitProject;
