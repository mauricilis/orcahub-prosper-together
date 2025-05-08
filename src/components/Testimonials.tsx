
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Finalmente encontrei um espaço onde trocar experiências faz parte da rotina.",
      name: "Carlos M.",
      role: "CEO, Empresa de Tecnologia",
      initials: "CM"
    },
    {
      quote: "Fechei meu primeiro contrato com outro membro logo no primeiro encontro.",
      name: "Mariana S.",
      role: "Fundadora, Agência de Marketing",
      initials: "MS"
    },
    {
      quote: "As mentorias transformaram completamente a forma como gerencio minha equipe.",
      name: "Roberto A.",
      role: "Diretor, Comércio Varejista",
      initials: "RA"
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            O que dizem nossos membros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Avatar className="h-16 w-16 bg-orca text-white">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
