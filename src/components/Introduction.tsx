
const Introduction = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-orca-100">
      <div className="container px-4 md:px-6 animate-fade-in">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-orca-900">
            O ORCAHUB é a sua rede de valor.
          </h2>
          <p className="text-xl text-gray-700">
            Criado para empresários que entendem que crescer é bom — mas prosperar junto é melhor.
          </p>
          <div className="pt-4">
            <p className="text-lg text-gray-600 italic">
              "Você pode até crescer sozinho. Mas prosperar… exige conexão."
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <div className="text-orca font-semibold px-4">Conexão</div>
            <div className="hidden md:block h-1 w-1 rounded-full bg-gray-400"></div>
            <div className="text-orca font-semibold px-4">Relacionamento</div>
            <div className="hidden md:block h-1 w-1 rounded-full bg-gray-400"></div>
            <div className="text-orca font-semibold px-4">Prosperidade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
