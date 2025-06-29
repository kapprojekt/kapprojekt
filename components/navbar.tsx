"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import logoImage from "@/src/logo-black.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const refMenu = useRef<HTMLDivElement>(null);

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/o-nas",
      label: "O nas",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      disabled: true,
    },
    {
      href: "/cennik",
      label: "Cennik",
      disabled: true,
    },
    {
      href: "/kontakt",
      label: "Kontakt",
    },
  ];

  useEffect(() => {
    const handleClickMenuOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (refMenu.current && !refMenu.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickMenuOut, true);
    setIsOpen(false);

    return () => {
      document.removeEventListener("pointerdown", handleClickMenuOut, true);
    };
  }, [pathname]);

  return (
    <nav
      className={`z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-10 before:absolute
			before:-z-10 before:inset-0 before:w-full before:h-full before:bg-[rgb(243,239,233,0.2)] before:backdrop-blur-sm`}
    >
      <Link href="/">
        <Image
          className="w-14 h-14 my-2"
          src={logoImage}
          alt="logo"
          width={1000}
          height={1000}
        />
      </Link>
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-2">
        {links.map((link) => (
          <Link
            key={link.label}
            className={`shrink-0 px-10 py-2 border-y-2 border-transparent font-bold transition-all ${
              pathname === link.href
                ? `
								hover:drop-shadow-none hover:transform-none border-b-stone-600`
                : `hover:-translate-y-0.5
							hover:drop-shadow-[0_3px_4px_rgba(0,0,0,0.2)]`
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Link
          className="px-4 py-3 text-base font-semibold transition-all duration-200 border-2
                  border-stone-600 rounded-md hover:bg-stone-600 hover:text-white"
          href="/kontakt"
        >
          Darmowa wycena
        </Link>
      </div>
      <div className="lg:hidden" ref={refMenu}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative flex justify-center items-center w-9 h-8 hover:bg-[rgba(255,255,255,0.2)] rounded-sm"
        >
          <span
            className={`absolute h-0.5 w-4/5 bg-black block rounded-4xl duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-4/5 bg-black block rounded-4xl duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-4/5 bg-black block rounded-4xl duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
        <div
          className={`absolute lg:hidden rounded-sm flex flex-col items-center inset-x-8 top-20 text-xl
					duration-300 py-4 before:absolute before:w-full before:h-full before:inset-0
					before:bg-[rgb(243,239,233,0.2)] before:rounded-sm before:backdrop-blur-sm
					${
            isOpen
              ? "translate-y-0 scale-100 opacity-100 visible"
              : "-translate-y-[300px] scale-0 opacity-0 invisible"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              className="inline-block px-10 my-4 font-semibold drop-shadow-lg"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="inline-block z-10 px-4 py-3 my-4 text-base font-semibold transition-all duration-200 border-2
                  border-stone-600 rounded-md"
            href="/kontakt"
          >
            Darmowa wycena
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
