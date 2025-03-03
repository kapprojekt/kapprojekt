import Image from "next/image";

import bgImage from '@/src/logo_salon kuchnia .jpg'

export default function Home() {

  const labels = ['Projektowanie wnętrz', 'Inspiracje', 'Home staging']

  return (
    <main>
      <section className="z-0 h-screen w-full relative flex justify-center items-center">
        <Image
          className="-z-10 absolute w-full h-full object-cover"
          src={bgImage}
          alt="homepage backgorund image"
          width={1400}
          height={1200} />

        <header>
          <h1 className="text-6xl sm:text-7xl md:text-8xl text-center font-semibold drop-shadow-[0_0_25px_rgb(243,239,233)]">KAP Projekt</h1>
          <div className="mt-4 flex gap-1 justify-center flex-wrap">
            {
              labels.map(label => (
                <span
                  key={label}
                  className="bg-[rgb(243,239,233,0.2)] backdrop-blur-sm px-4 py-2
                    font-semibold rounded-sm">
                      <span className="text-sm md:text-base drop-shadow-[0_0_10px_white]">
                        {label}
                      </span>
                </span>))
            }
          </div>
        </header>
      </section>
    </main>
  );
}
