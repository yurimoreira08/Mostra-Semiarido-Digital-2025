import React from "react";
import { GraduationCap, Building, Lightbulb, Users } from "lucide-react";

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: <GraduationCap className="h-12 w-12 text-green-600 mb-4" />,
      title: "Estudantes e professores",
      description:
        "Da área de tecnologia e inovação que buscam conhecimento e conexões.",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: <Building className="h-12 w-12 text-amber-600 mb-4" />,
      title: "Empreendedores e startups",
      description:
        "Que estão desenvolvendo soluções inovadoras para problemas reais.",
      bgColor: "bg-amber-50",
      hoverColor: "hover:bg-amber-100",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />,
      title: "Profissionais da inovação",
      description:
        "Envolvidos em projetos de transformação digital e novas tecnologias.",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600 mb-4" />,
      title: "Instituições públicas e privadas",
      description: "Interessadas em conhecer e apoiar iniciativas inovadoras.",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
    },
  ];

  return (
    <section id="publico" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Para quem é a MSD?
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            A Mostra Semiárido Digital é um evento inclusivo, destinado a todos
            os envolvidos e interessados no ecossistema de inovação e
            tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`${audience.bgColor} ${audience.hoverColor} p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex justify-center">{audience.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-700">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Não se encaixa em nenhuma categoria?
            </h3>
            <p className="text-gray-700 mb-4">
              Não se preocupe! Qualquer pessoa interessada em inovação,
              tecnologia e empreendedorismo é bem-vinda para participar e
              conhecer as iniciativas da região.
            </p>
            <a
              href="#inscricao"
              className="inline-block text-green-600 hover:text-green-800 font-medium underline"
            >
              Faça sua inscrição
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
