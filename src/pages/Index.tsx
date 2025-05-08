
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Introduction />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
