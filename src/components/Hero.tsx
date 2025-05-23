
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center relative overflow-hidden pt-24">
      {/* Parallax background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/619fad1d-4048-42b8-a17b-9e1d881f1936.png')`,
          transform: `translateY(${offset}px)`,
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-4 md:gap-10 relative z-10 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl mx-auto text-white">
            Você empreende, lidera, resolve. <br />
            <span className="text-cta">Mas está fazendo isso sozinho?</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-[700px] mx-auto mt-4">
            Na hora de crescer, o que mais pesa não é o esforço — é o isolamento.
          </p>
        </div>
        
        <div className="w-full max-w-sm md:max-w-md mt-6">
          <a href="https://pay.hotmart.com/V99888478V" target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-cta hover:bg-cta-hover text-white font-semibold py-6 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl">
              Quero fazer parte da rede ORCAHUB
            </Button>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#introduction" aria-label="Rolar para baixo">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
