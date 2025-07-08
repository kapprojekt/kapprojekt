import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-24">
      <div className="px-4 mx-auto my-6 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center">
            <h1 className="font-bold leading-tight text-black text-4xl lg:text-5xl">
              O nas
            </h1>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-xl my-6 font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
            Studio
          </h2>
          <p className="my-12 leading-relaxed text-justify text-gray-600 sm:text-lg lg:text-xl">
            KAP Projekt tworzą architektki Maja i Katarzyna. Skończyłyśmy studia
            magisterskie na wydziale Architektury we Wrocławiu. Po kilku latach
            zbierania doświadczenia w Polsce i za granicą, stworzyłyśmy KAP
            Projekt. Tworzymy wnętrza prywatne - domy, mieszkania, lokale na
            wynajem, komercyjne i biurowe. Naszym celem jest pełne zadowolenie
            naszych Klientów, piękne wnętrze i mądre rozwiązania funkcjonalnego,
            które sprawią, że każdy dzień w Twoim Domu będzie idealny.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-xl my-6 font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
            Co nas wyróżnia
          </h2>
          <p className="my-12 leading-relaxed text-justify text-gray-600 sm:text-lg lg:text-xl">
            Nasze studio wyróżnia dbałość o indywidulane podejście,
            profesjonalne podejście i elastyczność. Jesteśmy otwarci na
            modyfikacje oferty i harmonogramu, tak aby Twoje wnętrze powstało
            bezstresowo, w miłej atmosferze i w pełni tak jak Ci wygodnie.
            Prowadzimy projekty stacjonarnie, zdalnie lub hybrydowo w zależności
            od lokalizacji i preferencji Inwestora.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-xl my-6 font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
            Dlaczego warto?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-0 text-center">
            <div className="overflow-hidden bg-white rounded-xl flex-1 flex flex-col justify-center">
              <div className="p-6">
                <h1 className="my-6 text-xl leading-tight font-semibold text-gray-900">
                  Kompleksowo zajmiemy się Twoim projektem.
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Jeśli chcesz zajmiemy się też zamówieniami i nadzorem ekip
                  budowlanych i wykończeniowych.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl flex-1 flex flex-col justify-center">
              <div className="p-6">
                <h1 className="my-6 text-xl leading-tight font-semibold text-gray-900">
                  Zyskujesz spokój i oszczędzasz czas i pieniądze
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Dzięki naszej wiedzy i doświadczeniu, nie musisz spędzać
                  długich godzin na szukaniu odpowiednich materiałów i mebli.
                  Zrobimy to za Ciebie bezbłędnie, dzięki czemu nie stracisz
                  pieniędzy na nieudane rozwiązania a przed zakupem wszystko
                  zobaczysz na wizualizacjach.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl flex-1 flex flex-col justify-center">
              <div className="p-6">
                <h1 className="my-6 text-xl leading-tight font-semibold text-gray-900">
                  Dom jak z pinteresta, ale ponadczasowy i Twój
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Masz głowę pełną pomysłów, Twój folder inspiracji pęka w
                  szwach, a może zupełnie nie wiesz jak zacząć? Bez względu na
                  odpowiedz, pomożemy Ci stworzyć miejsce, które będzie w pełni
                  odzwierciedlać Twój styl, a do tego będzie oryginalne i
                  funkcjonalne.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl flex-1 flex flex-col justify-center">
              <div className="p-6">
                <h1 className="my-6 text-xl leading-tight font-semibold text-gray-900">
                  Wiesz ile to będzie kosztować
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Nasi klienci dostają od nas plik Excel lub Arkusz Google z
                  pełnym zestawieniem materiałów, mebli i elementów na wymiar
                  dzięki czemu wiedzą, że mieszczą się w założonym budżecie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
