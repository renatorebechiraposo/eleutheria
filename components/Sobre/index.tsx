"use client";

/*Next*/
import Image from "next/image";

/*React*/
import React from "react";

/*Fonts*/
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

export default function Sobre() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-w-full mt-8 mb-8 gap-1.5">
      <div className="flex flex-col gap-4 md:max-w-2xl">
        <h1
          id="sobre"
          className={`flex justify-center ${playfair.className} font-bold text-2xl md:text-4xl mb-4`}
        >
          Sobre
        </h1>
        <p className="text-xs mx-2 md:text-sm">
          O Eleutheria é um retiro católico organizado pela juventude da
          Paróquia Santa Luzia de Hortolândia/SP, destinado a jovens de 14 a 30
          anos.
        </p>
        <p className="text-xs mx-2 md:text-sm">
          Neste encontro, você terá a oportunidade de
        </p>
        <ul className="list-disc pl-5 text-xs mx-2 md:text-sm">
          <li>Desenvolver uma relação mais profunda com Deus.</li>
          <li>Se abster das preocupações cotidianas.</li>
          <li>Descobrir o sentido da sua vida.</li>
          <li>Encontrar a verdadeira alegria.</li>
          <li>Compartilhar experiências com outros jovens</li>
        </ul>
        <p className="text-xs mx-2 md:text-sm">
          O Eleutheria é um momento único para você ter um encontro genuíno com
          a bondade e a misericórdia de Deus.
        </p>
        <p className="text-xs mx-2 md:text-sm">
          Se você está procurando por um momento de reflexão, oração e encontro
          com Deus, o Eleutheria é o lugar certo para você!
        </p>
        <Image
          src="/img/sobre/coração-mobile.webp"
          alt="Três corações sagrados"
          width={600}
          height={600}
          className="flex w-full justify-center items-center"
        />
        <h1
          className={`flex justify-center ${playfair.className} font-bold text-2xl md:text-4xl mb-4`}
        >
          O que é Eleutheria?
        </h1>
        <p className="text-xs mx-2 md:text-sm">
          "Eleutheria" é uma palavra grega (Ελευθερία) que significa
          "liberdade". No contexto cristão, especialmente no catolicismo, o
          termo "Eleutheria" é usado para se referir à liberdade espiritual que
          vem da relação com Deus.
        </p>
        <p className="text-xs mx-2 md:text-sm">
          Nesse sentido, a Eleutheria não se refere apenas à liberdade física ou
          política, mas sim à liberdade interior que permite que as pessoas
          vivam de acordo com a vontade de Deus e alcancem a plenitude da vida.
        </p>
      </div>
    </div>
  );
}
