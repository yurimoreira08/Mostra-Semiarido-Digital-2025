import React from "react";
import {
  Clock,
  Users,
  MessageSquare,
  Mic,
  TrendingUp,
  Award,
} from "lucide-react";

const Schedule: React.FC = () => {
  const scheduleItems = [
    {
      time: "07h00",
      title: "Credenciamento",
      description: "Recepção dos participantes.",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    {
      time: "08h00",
      title: "Abertura",
      description: "Cerimônia de abertura com autoridades.",
      icon: <Users className="h-6 w-6 text-green-600" />,
    },
    {
      time: "08h40",
      title: "Mostra de startups com banners",
      description:
        "Apresentação rápida de startups locais com soluções inovadoras.",
      icon: <MessageSquare className="h-6 w-6 text-amber-600" />,
    },
    {
      time: "09h40",
      title: "Palestras",
      description:
        "Palestra inspiradora sobre as oportunidades de inovação na região.",
      icon: <Mic className="h-6 w-6 text-orange-600" />,
    },
    {
      time: "10h40",
      title: "Pitchs do Guaribas Valley",
      description:
        "Mostra de projetos inovadores desenvolvidos por estudantes e empresas.",
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
    },
    {
      time: "11h40",
      title: "Premiações, Sorteios e Encerramento",
      description:
        "Cerimônia de encerramento com premiação dos melhores projetos.",
      icon: <Award className="h-6 w-6 text-red-600" />,
    },
  ];

  return (
    <section id="programacao" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Programação do Dia 07 de Agosto de 2025
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Uma programação completa com palestras, apresentações e networking
            para impulsionar o ecossistema de inovação do semiárido.
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
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                        index % 3 === 0
                          ? "border-green-500"
                          : index % 3 === 1
                          ? "border-amber-500"
                          : "border-blue-500"
                      } transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="flex items-center mb-3">
                        <div className="mr-3 p-2 rounded-full bg-gray-100">
                          {item.icon}
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
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
