import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Faq = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            FAQ
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Najczęściej zadawane pytania
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                Kiedy najlepiej zgłosić się do projektanta wnętrz?
              </span>

              <FaChevronDown className="rotate-180" />
            </button>

            <div className="px-4 pb-5 sm:px-6 sm:pb-6 space-y-6">
              <p>
                Wielu Klientów zgłasza się do nas zaraz po zakupie
                nieruchomośći, jeszcze przed obiorem deweloperskim. To pozwala
                nam na stworzenie koncepcji, wizualizacji, projektu technicznego
                i złożenie zamówień tak, aby najszybciej jak to możliwe, zacząć
                prace wykończeniowe.
              </p>
              <p>
                Jeśli zgłosisz się od razu po zakupie, być może będziemy mieć
                możliwość wprowadzenia zmian lokarskiech (w przypadku inwestycji
                deweloperskich), co znacznie przyspieszy pracę ekipie
                wykończeniowej i jest korzystne finansowo.
              </p>
              <p>
                Naszym Klientom polecamy ekipy wykończeniowe, stolarzy, szklarzy
                i sklepy z wyposażeniem wnętrz. Skorzystanie z naszego polecania
                nie jest oczywiście obligatoryjne.
              </p>
              <p>
                Jeśli posiadasz swoich Wykonawców, poinformuj nas o ustalonym
                terminie. Zalecamy ustalenie harmonogramu prac projektowych
                przed zarezerwowaniem ternimu u Wykonawców.
              </p>
              <p>
                Posiadamy usługę <b>Konsultacji Wnętrzarskiej</b>, której koszt
                odejmowany jest od Projektu, przy nawiązaniu współpracy. Z
                takiej konsultacji możesz skorzystać jeszcze przed zakupem.
                Wspólnie przeanalizujemy potencjał mieszkań czy domów, które
                oglądasz, stworzymy wstępny układ funkcjonalny i sprawdzimy
                istotne kwestie techniczne
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                Czy mogę złosić się z projektem “na już”
              </span>

              <FaChevronDown />
            </button>

            <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Amet minim mollit non deserunt ullamco est sit{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline"
                >
                  aliqua dolor
                </a>{" "}
                do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <div className="">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  Czy jest minimalny lub maksymalny metraż projektowanej
                  powierzchni?
                </span>

                <FaChevronDown />
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                Jaki jest koszt wykończenia mieszkania od stanu deweloperskiego
                w 2025 roku?
              </span>

              <FaChevronDown />
            </button>

            <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Amet minim mollit non deserunt ullamco est sit{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline"
                >
                  aliqua dolor
                </a>{" "}
                do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>

        {/* <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p> */}
      </div>
    </section>
  );
};

export default Faq;
