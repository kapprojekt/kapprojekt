import Image from "next/image";

import bgImage from "@/src/logo_salon kuchnia .jpg";
import { getMarkup } from "@/lib/utils";
import { HomePageData } from "@/lib/types";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Faq from "@/components/faq/faq";

export default function Home() {
  const defaultData: HomePageData = {
    title: "KAP Projekt",
    subtitle: "",
    longtext: "",
    backgroundImage: bgImage,
  };

  const homepageMatter = getMarkup("content/pages", "homepage.md");

  console.log(homepageMatter);

  let data: HomePageData;

  if (!homepageMatter) {
    data = defaultData;
  }

  data = homepageMatter?.data as HomePageData;

  return (
    <main>
      <section className="z-10 h-screen w-full relative">
        <Image
          className="-z-10 absolute w-full h-full object-cover"
          src={data.backgroundImage}
          alt="homepage backgorund image"
          width={1400}
          height={1200}
        />

        <header className="px-8 text-white text-center sm:text-left bg-[rgba(0,0,0,0.4)] w-full h-full flex flex-col justify-center items-center sm:items-baseline">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold drop-shadow-[0_0_10px_black]">
            {data.title}
          </h1>
          <h2 className="mb-8 mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-[0_0_10px_black] sm:w-4/5 md:w-2/3 lg:w-1/2">
            Kompleksowo zaprojektujemy Twoje wnętrze
          </h2>
          <p className="drop-shadow-[0_0_15px_black] sm:text-lg font-medium sm:w-2/3 md:w-1/2">
            Nasz zespół doświadczonych architektów zajmie się Twoim wnętrzem od
            układu funkcjonalnego aż po nadzór na budowie. Stworzymy miejsce w
            Twoim stylu, dopasowane do Ciebie. Bez stresu, tenimowo, od początku
            do końca.
          </p>
          <div className="mt-10 flex gap-4 flex-col sm:flex-row text-center">
            <Link
              className="px-4 py-3 text-base font-semibold transition-all duration-200 border-2
                  border-stone-600 bg-stone-600 rounded-md  hover:bg-stone-100 hover:text-stone-600"
              href="/cennik"
            >
              Zobacz ofertę
            </Link>
            <Link
              className="px-4 py-3 text-base font-semibold transition-all duration-200 border-2
                  border-stone-600 backdrop-blur-sm rounded-md hover:bg-stone-600 hover:text-white"
              href="/kontakt"
            >
              Darmowa wycena
            </Link>
          </div>
          {/* <div className="mt-4 flex gap-1 justify-center flex-wrap">
            {data.tags.map((label) => (
              <span
                key={label}
                className="bg-[rgb(243,239,233,0.2)] backdrop-blur-sm px-4 py-2
                    font-semibold rounded-sm"
              >
                <span className="text-sm md:text-base drop-shadow-[0_0_10px_black]">
                  {label}
                </span>
              </span>
            ))}
          </div> */}
        </header>
        {data.socialMedia && (
          <article className="absolute w-full bottom-0 flex justify-center gap-3 mb-6 text-white">
            {data.socialMedia.map((mediaLink) => (
              <Link
                key={mediaLink.url}
                href={mediaLink.url}
                target="_blank"
                className="aspect-square bg-[rgb(243,239,233,0.2)] backdrop-blur-sm p-4 rounded-full
              text-3xl hover:bg-stone-100 hover:text-stone-600 duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {mediaLink.type === "ig" && <FaInstagram />}
                {mediaLink.type === "fb" && <FaFacebookF />}
              </Link>
            ))}
          </article>
        )}
      </section>
      <Faq data={data.faq!} />
      {/* <Contact /> */}
    </main>
  );
}
