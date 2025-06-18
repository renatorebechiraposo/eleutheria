import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import { Playfair_Display } from "next/font/google";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const menuItems = [
  { name: "Sobre", link: "sobre" },
  { name: "Testemunhos", link: "testemunhos" },
  { name: "Fotos", link: "fotos" },
  { name: "Local", link: "local" },
  { name: "Contato", link: "contato" },
  { name: "Inscreva-se", link: "/inscrevase" },
];

export default function Header() {
  return (
    <>
      <header
        className={`flex flex-row-reverse items-center justify-between w-full px-6 py-4 gap-8 bg-[#1c1d28] shadow-md md:flex md:flex-row md:justify-center ${playfair.variable}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/header/logo.png"
            alt="Logo Eleutheria"
            width={100}
            height={100}
          />
        </Link>
      </header>
    </>
  );
}
