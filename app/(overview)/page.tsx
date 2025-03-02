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
          <h1 className="text-8xl font-semibold drop-shadow-[0_0_25px_rgb(243,239,233)]">KAP Projekt</h1>
          <div className="mt-4 flex justify-center">
            {
              labels.map(label => (
                <span
                  key={label}
                  className="bg-[rgb(243,239,233,0.2)] backdrop-blur-sm px-4 py-2 mx-1
                    font-semibold rounded-sm">
                      <span className="drop-shadow-[0_0_10px_white]">
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
