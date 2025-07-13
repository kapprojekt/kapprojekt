"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";
import CustomImage from "./custom-image";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const refMenu = useRef<HTMLDivElement>(null);

  const logoBlack =
    "https://res.cloudinary.com/dsllxh346/image/upload/v1752172616/logo-black_frmeir.png";
  const logoWhite =
    "https://res.cloudinary.com/dsllxh346/image/upload/v1752172616/logo-white_tjnlbh.png";

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
    },
    {
      href: "/cennik",
      label: "Cennik",
    },
    {
      href: "/kontakt",
      label: "Kontakt",
    },
  ];

  const handleClickMenuOut = (e: PointerEvent) => {
    const target = e.target as HTMLElement;
    if (refMenu.current && !refMenu.current.contains(target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      handleScroll();
      document.addEventListener("scroll", handleScroll, true);
    }

    if (pathname !== "/") {
      setIsSticky(true);
    }

    document.addEventListener("pointerdown", handleClickMenuOut, true);
    setIsOpen(false);

    return () => {
      document.removeEventListener("scroll", handleScroll, true);
      document.removeEventListener("pointerdown", handleClickMenuOut, true);
    };
  }, [pathname]);

  return (
    <nav
      className={`z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-10 duration-300 ${
        isSticky ? "bg-[rgb(243,_239,_233)] shadow-sm" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <CustomImage
          className="w-14 h-14 my-2"
          src={isSticky ? logoBlack : logoWhite}
          alt="logo"
          width={600}
          height={600}
          priority
        />
      </Link>
      <div
        className={`hidden lg:flex lg:items-center lg:justify-center lg:gap-2 ${
          isSticky ? "text-black font-bold" : "text-stone-200 font-semibold"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            className={`shrink-0 px-10 py-2 border-y-2 border-transparent transition-all ${
              pathname === link.href
                ? `
								hover:drop-shadow-none hover:transform-none ${
                  isSticky ? "border-b-stone-600" : "border-b-stone-400"
                }`
                : `hover:-translate-y-0.5
							hover:drop-shadow-[0_3px_4px_rgba(0,0,0,0.2)]`
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Link
          className={`px-4 py-3 text-base transition-all duration-200 border-2
                   rounded-md ${
                     isSticky
                       ? "border-stone-600 hover:bg-stone-600 hover:text-white"
                       : "border-stone-400 hover:bg-stone-400 hover:text-black"
                   }`}
          href="/kontakt"
        >
          Darmowa wycena
        </Link>
      </div>
      <div className="lg:hidden" ref={refMenu}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative flex justify-center items-center w-9 h-8 rounded-sm"
        >
          <span
            className={`absolute h-0.5 w-4/5 block rounded-4xl duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            } ${isSticky ? "bg-black" : "bg-white"}`}
          />
          <span
            className={`absolute h-0.5 w-4/5 block rounded-4xl duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            } ${isSticky ? "bg-black" : "bg-white"}`}
          />
          <span
            className={`absolute h-0.5 w-4/5 block rounded-4xl duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            } ${isSticky ? "bg-black" : "bg-white"}`}
          />
        </button>
        <div
          className={`absolute lg:hidden bg-[rgb(243,_239,_233)] rounded-sm flex flex-col items-center inset-x-8 top-20 text-xl
					duration-300 py-4 shadow-lg
					${
            isOpen
              ? "translate-y-0 scale-100 opacity-100 visible"
              : "-translate-y-[300px] scale-0 opacity-0 invisible"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              onClick={() => setIsOpen(false)}
              className="inline-block px-10 my-4 font-semibold drop-shadow-lg"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            onClick={() => setIsOpen(false)}
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
