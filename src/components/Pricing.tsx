
import { Button } from "@/components/ui/button";
import { Check, DollarSign } from "lucide-react";

const Pricing = () => {
  const features = [
    "Participação em todas as rodas de negócios (presenciais ou online)",
    "Canal exclusivo de relacionamento entre membros",
    "Acesso antecipado às formações e mentorias",
    "Participação na vitrine digital do ORCAHUB",
    "Curadoria estratégica feita pela equipe da Orcatéa"
  ];

  return (
    <section id="pricing" className="w-full py-12 md:py-24 bg-orca text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Invista no seu crescimento
            </h2>
            <p className="text-lg text-orca-100">
              Junte-se à comunidade ORCAHUB e acesse todos os benefícios por um investimento acessível.
            </p>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-orca-100" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8 animate-fade-in-right">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="h-6 w-6 text-cta" />
              <h3 className="text-2xl font-bold">Anuidade ORCAHUB</h3>
            </div>
            <div className="text-center mb-6">
              <div className="text-lg line-through text-gray-500">De R$497</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-bold">R$247</span>
                <span className="text-gray-600">anuais</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Parcelamento em até 12x no cartão de crédito</div>
            </div>
            <a href="https://pay.hotmart.com/V99888478V" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-cta hover:bg-cta-hover text-white font-semibold py-6 rounded-lg text-lg transition-all">
                Quero fazer parte da rede ORCAHUB
              </Button>
            </a>
            <p className="text-center text-sm mt-4 text-gray-600">
              Acesso completo por 12 meses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
