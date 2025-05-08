
import BenefitCard from "./BenefitCard";
import { 
  Users, 
  Handshake, 
  GraduationCap, 
  UserRound,
  Compass 
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Rodas de Negócios Guiadas",
      description: "Trocas reais com empresários da comunidade em encontros presenciais ou online, com foco em gerar oportunidades."
    },
    {
      icon: Handshake,
      title: "Parcerias e Collabs Exclusivas",
      description: "Conexões facilitadas entre empresas da rede para criar campanhas conjuntas e formar alianças estratégicas."
    },
    {
      icon: Users,
      title: "Visitas Técnicas Entre Membros",
      description: "Empresários visitam empresas da comunidade para trocar aprendizados práticos sobre gestão e processos."
    },
    {
      icon: GraduationCap,
      title: "Formações Profissionais",
      description: "Cursos voltados à capacitação de equipes nas áreas que mais travam o crescimento do seu negócio."
    },
    {
      icon: UserRound,
      title: "Mentorias com Empresários",
      description: "Acesso a histórias reais, aprendizados e conselhos de quem já passou pelos mesmos desafios — e superou."
    },
    {
      icon: Compass,
      title: "Ambiente com Direção e Propósito",
      description: "Toda experiência é guiada pela Orcatéa com propósito claro: conectar empresários de forma estratégica."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800 mb-4">
            Benefícios do <span className="text-orca">ORCAHUB</span>
          </h2>
          <p className="text-lg text-gray-600">
            Um ecossistema estratégico criado pela Orcatéa Contabilidade para conectar empresários que querem prosperar juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
