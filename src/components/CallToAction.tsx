
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative">
      <div className="container px-4 md:px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4">
            <img 
              src="/lovable-uploads/29e50ba4-e231-4b67-b9b9-ce7ef25c6951.png" 
              alt="Orcatéa Logo" 
              className="h-32 md:h-40 w-auto"
            />
            <img 
              src="/lovable-uploads/fe25c206-671e-4d79-9604-5916be4b453f.png" 
              alt="Selo 55 anos Orcatéa" 
              className="h-24 md:h-32 w-auto animate-pulse-slow"
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/5 space-y-6 text-left">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
                Você não está sendo convidado apenas para um grupo de networking.
              </h2>
              <p className="text-xl text-gray-600">
                Está sendo convidado para fazer parte de um ecossistema construído por quem carrega 55 anos de história ao lado de mais de 500 empresários.
              </p>
              <p className="text-xl text-gray-600">
                A Orcatéa não conecta empresas por acaso — ela conecta com propósito, método e visão de futuro.
              </p>
              <p className="text-xl text-gray-600 font-medium">
                E o ORCAHUB é a extensão viva desse compromisso: transformar conexões em prosperidade.
              </p>
            </div>
            <div className="md:w-2/5 flex justify-center mt-6 md:mt-0">
              <img 
                src="/lovable-uploads/6e943a24-554c-45f9-a427-b78203aeebc8.png" 
                alt="Executive" 
                className="h-auto w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-cta"
              />
            </div>
          </div>
          
          <div className="pt-8">
            <p className="mb-8 text-lg text-gray-600">
              Clique abaixo e entre agora para a rede que cresce com inteligência, e impulsiona quem realmente faz para prosperar.
            </p>
            <Button className="bg-cta hover:bg-cta-hover text-white font-semibold py-6 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl">
              Quero fazer parte da rede ORCAHUB
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
