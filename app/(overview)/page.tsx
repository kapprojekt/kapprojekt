import { getFolderMarkups, getMarkup } from "@/lib/utils";
import { HomePageData, ProjectData } from "@/lib/types";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Faq from "@/components/faq/faq";
import ProjectCarousel from "@/components/project/project-carousel";
import MainTiles from "@/components/main-tiles/main-tiles";
import About from "@/components/about/about";
import TestimonialCarousel from "@/components/testimonial/testimonial-carousel";
import CustomImage from "@/components/custom-image";
import ContactForm from "@/components/contact/contact-form";
import ImageSection from "@/components/image-section/image-section";

export default function Home() {
  const defaultData: HomePageData = {
    title: "KAP Projekt",
    subtitle: "Kompleksowo zaprojektujemy Twoje wnętrze",
    longtext: `Nasz zespół doświadczonych architektów zajmie się Twoim wnętrzem od
            układu funkcjonalnego aż po nadzór na budowie. Stworzymy miejsce w
            Twoim stylu, dopasowane do Ciebie. Bez stresu, terminowo, od
            początku do końca.`,
    backgroundImage: "/src/background-image.jpg",
  };

  const homepageMatter = getMarkup("content/pages", "homepage.md");

  let data: HomePageData;

  if (!homepageMatter) {
    data = defaultData;
  }

  data = homepageMatter?.data as HomePageData;

  const projects = getFolderMarkups("content/projects");

  if (!projects) {
    return (
      <p className="py-32 text-4xl text-center">
        Wystąpił błąd w czasie pobierania danych!
      </p>
    );
  }

  const projectsData = projects.map((project) => project.data) as ProjectData[];

  return (
    <main>
      <section className="z-10 min-h-max h-screen w-full relative">
        <CustomImage
          className="-z-10 absolute w-full h-full object-cover"
          src={data.backgroundImage.toString()}
          alt="homepage backgorund image"
          width={1400}
          height={1200}
        />

        <header className="px-8 text-white text-center sm:text-left bg-[rgba(0,0,0,0.4)] w-full h-full flex flex-col justify-center items-center sm:items-baseline">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold drop-shadow-[0_0_10px_black]">
            {data.title}
          </h1>
          <h2 className="mb-8 mt-2 text-xl sm:text-3xl md:text-4xl font-semibold drop-shadow-[0_0_10px_black] sm:w-4/5 md:w-2/3 lg:w-1/2">
            {data.subtitle}
          </h2>
          <p className="drop-shadow-[0_0_15px_black] text-sm sm:text-lg font-medium sm:w-2/3 md:w-1/2">
            {data.longtext}
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
      <MainTiles />
      <ProjectCarousel projectsData={projectsData} />
      <TestimonialCarousel testimonialData={data.testimonials!} />
      <Faq data={data.faq!} />
      {/* <ImageSection data={data.imageSection!} /> */}
      <About />
      <section className="w-full max-w-5xl mx-auto py-10 sm:py-16 lg:py-24 h-full px-2 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </main>
  );
}
