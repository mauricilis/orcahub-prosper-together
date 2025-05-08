
const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/e570cf41-f606-49c5-bfdc-b7cc2e65f5b1.png" 
              alt="ORCAHUB Logo" 
              className="h-10 w-auto"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} ORCAHUB. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Um produto Orcatéa Contabilidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
