import React from "react";

import { Fredoka } from "next/font/google";
import Image from "next/image";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fredoka",
});

export default function NotFound() {
  return (
    <main
      className={`${fredoka.className} flex flex-col items-center justify-center md:min-h-[calc(100vh-112px-148px)]`}
    >
      <p className="text-4xl md:text-6xl text-[#483417] font-bold text-center mt-9 md:mt-16 md:mb-4.5">
        OPSS!!!
      </p>
      <Image
        src={"/img/not-found.png"}
        alt="Not Found"
        width={300}
        height={300}
        className="w-52 h-80 md:w-72 md:h-96 md:mb-16"
      />
    </main>
  );
}
