import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <img
          src="/lovable-uploads/e570cf41-f606-49c5-bfdc-b7cc2e65f5b1.png"
          alt="ORCAHUB Logo"
          className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'} w-auto`}
        />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#benefits" className="text-gray-700 hover:text-cta transition-colors font-medium text-base">Benefícios</a>
            <a href="#pricing" className="text-gray-700 hover:text-cta transition-colors font-medium text-base">Fazer parte</a>
          </nav>
          <img
            src="/lovable-uploads/bb05f472-42ea-416c-b962-aa1249333dfe.png"
            alt="Orcatéa Logo"
            className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'} w-auto hidden md:block`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
