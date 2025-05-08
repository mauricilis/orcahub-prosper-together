
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm py-3 shadow-sm">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <img
          src="/lovable-uploads/e570cf41-f606-49c5-bfdc-b7cc2e65f5b1.png"
          alt="ORCAHUB Logo"
          className="h-10 w-auto"
        />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#benefits" className="text-gray-700 hover:text-orca transition-colors">Benefícios</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orca transition-colors">Depoimentos</a>
            <a href="#pricing" className="text-gray-700 hover:text-orca transition-colors">Preços</a>
          </nav>
          <img
            src="/lovable-uploads/bb05f472-42ea-416c-b962-aa1249333dfe.png"
            alt="Orcatéa Logo"
            className="h-8 w-auto hidden md:block"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
