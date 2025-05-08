
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            Sua empresa não precisa de mais tarefas.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ela precisa de uma rede que te ajude a prosperar. Comece a fazer parte do movimento que conecta empresários com direção, propósito e resultado.
          </p>
          <div className="pt-4">
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
