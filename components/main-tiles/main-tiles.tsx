import React from "react";

const MainTiles = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-10 sm:py-16 h-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6 px-8 md:px-0">
        <div className="overflow-hidden bg-white rounded-xl flex-1">
          <div className="py-6 px-8">
            <h1 className="my-6 text-2xl leading-tight font-bold text-gray-900">
              Indywidualne podejście
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Projekt dostosujemy do Twoich potrzeb, estetyki, stylu życia i
              budżetu.
            </p>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-xl flex-1">
          <div className="py-6 px-8">
            <h1 className="my-6 text-2xl leading-tight font-bold text-gray-900">
              Wiedza i doświadczenie
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Nasz zespół tworzą architekci z wykształceniem i wieloletnim
              doświadczeniem w projektowaniu i opracowaniu dokumentacji
              technicznej. Współpracujemy z ekipami wykończeniowymi i
              stolarzami!
            </p>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-xl flex-1">
          <div className="p-6">
            <h1 className="my-6 text-2xl leading-tight font-bold text-gray-900">
              Niezwykłe wnętrze w Twoim budżecie
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Tworzymy wnętrza wyskobudżetowe jak i ekonomiczne mieszkania na
              wynajem. Z nami kontrolujesz budżet bez stresu!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTiles;
