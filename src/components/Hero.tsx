
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full pt-20 pb-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-4 md:gap-10 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl mx-auto text-gray-800">
            Você empreende, lidera, resolve. <br />
            <span className="text-orca">Mas está fazendo isso sozinho?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto mt-4">
            Na hora de crescer, o que mais pesa não é o esforço — é o isolamento.
          </p>
        </div>
        
        <div className="w-full max-w-sm md:max-w-md">
          <Button className="w-full bg-cta hover:bg-cta-hover text-white font-semibold py-6 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl">
            Quero fazer parte da rede ORCAHUB
          </Button>
        </div>

        <div className="mt-8 md:mt-12 flex items-center justify-center">
          <img 
            src="/lovable-uploads/e570cf41-f606-49c5-bfdc-b7cc2e65f5b1.png" 
            alt="ORCAHUB Logo" 
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
