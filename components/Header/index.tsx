"use client";

/*Next*/
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/*React*/
import { Link as ScrollLink } from "react-scroll";
import React, { useEffect, useState } from "react";

/*Fonts*/
import { Playfair_Display } from "next/font/google";

/*Mantine*/
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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

type MenuItem = {
  name: string;
  link: string;
};

type RenderMenuItemProps = {
  item: MenuItem;
  closeMenu: () => void;
  pathname: string;
  router: ReturnType<typeof useRouter>;
};

function renderMenuItem({
  item,
  closeMenu,
  pathname,
  router,
}: RenderMenuItemProps) {
  const handleScrollLinkClick = () => {
    closeMenu();
    if (pathname !== "/") {
      router.push("/");
    }
  };

  if (item.name === "Inscreva-se") {
    return (
      <Link
        key={item.name}
        href={item.link}
        className={`${playfair.className} px-4 text-[#f9f9f9] text-lg cursor-pointer hover:text-[#fed728] hover:duration-500`}
        onClick={closeMenu}
      >
        {item.name}
      </Link>
    );
  } else {
    return (
      <ScrollLink
        key={item.name}
        to={item.link}
        smooth={true}
        duration={500}
        className={`${playfair.className} px-4 text-[#f9f9f9] text-lg cursor-pointer hover:text-[#fed728] hover:duration-500`}
        onClick={handleScrollLinkClick}
      >
        {item.name}
      </ScrollLink>
    );
  }
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [opened, { toggle, close }] = useDisclosure(false);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <header className="flex flex-row-reverse items-center justify-between w-full p-4 gap-8 bg-[#1c1d28] shadow-lg md:flex md:flex-row md:justify-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/header/logo.png"
            alt="Logo Eleutheria"
            width={100}
            height={100}
          />
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex divide-x divide-[#d9b141]">
          {menuItems.map((item) =>
            renderMenuItem({ item, closeMenu: close, pathname, router })
          )}
        </nav>
        <h1 className={`md:hidden ${playfair.className} text-white`}>
          ELEUTHERIA
        </h1>
        {/* Mobile Menu */}
        {hasMounted && (
          <nav className="flex justify-center items-center md:hidden">
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
              color="#f9f9f9"
              size="lg"
            />

            {opened && (
              <div className="flex flex-col py-6 absolute top-28 left-0 w-full bg-[#1c1d28] shadow-lg z-50">
                <div className="flex flex-col gap-4">
                  {menuItems.map((item) =>
                    renderMenuItem({
                      item,
                      closeMenu: close,
                      pathname,
                      router,
                    })
                  )}
                </div>
              </div>
            )}
          </nav>
        )}
      </header>
    </>
  );
}
