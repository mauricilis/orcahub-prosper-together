
const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Executive Image */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/lovable-uploads/6e943a24-554c-45f9-a427-b78203aeebc8.png" 
              alt="Executive" 
              className="h-auto w-full max-w-xs md:max-w-sm rounded-lg shadow-md"
            />
          </div>
          
          {/* Footer Content */}
          <div className="md:w-2/3 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/e570cf41-f606-49c5-bfdc-b7cc2e65f5b1.png" 
                alt="ORCAHUB Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="text-center md:text-left mt-4">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} ORCAHUB. Todos os direitos reservados.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Um produto Orcatéa Contabilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
