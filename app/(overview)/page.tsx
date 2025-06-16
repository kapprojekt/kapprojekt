import Image from "next/image";

import bgImage from '@/src/logo_salon kuchnia .jpg'
import { getMarkup } from "@/lib/utils";
import { HomePageData } from "@/lib/types";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Faq from "@/components/faq";

export default function Home() {

  const defaultData: HomePageData = {
    title: 'KAP Projekt',
    tags: ['Projektowanie wnętrz', 'Inspiracje', 'Home staging'],
    backgroundImage: bgImage
  }

  const homepageMatter = getMarkup('content/pages', 'homepage.md')

  let data: HomePageData

  if(!homepageMatter) {
    data = defaultData
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
          height={1200} />

        <header className="text-white bg-[rgba(0,0,0,0.1)] w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl text-center font-semibold drop-shadow-[0_0_10px_black]">{data.title}</h1>
          <div className="mt-4 flex gap-1 justify-center flex-wrap">
            {
              data.tags.map(label => (
                <span
                  key={label}
                  className="bg-[rgb(243,239,233,0.2)] backdrop-blur-sm px-4 py-2
                    font-semibold rounded-sm">
                      <span className="text-sm md:text-base drop-shadow-[0_0_10px_black]">
                        {label}
                      </span>
                </span>))
            }
          </div>
        </header>
        {data.socialMedia &&
          <article className="absolute w-full bottom-0 flex justify-center gap-3 mb-6 text-white">
            {data.socialMedia.map(mediaLink => (
              <Link key={mediaLink.url} href={mediaLink.url} target="_blank" className="aspect-square bg-[rgb(243,239,233,0.2)] backdrop-blur-sm p-4 rounded-full
              text-3xl hover:bg-stone-100 hover:text-stone-600 duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                {mediaLink.type === 'ig' && <FaInstagram />}
                {mediaLink.type === 'fb' && <FaFacebookF />}
              </Link>
            ))}
          </article>
        }
      </section>
      <Faq />
    </main>
  );
}
