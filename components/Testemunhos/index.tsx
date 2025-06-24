"use client";

/*React*/
import React from "react";

/*Mantine*/
import { Avatar } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

/*Hooks */
import { useMediaQuery } from "@/hooks/useMediaQuery";

/*Fonts*/
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

type Testimonial = {
  name: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Guilherme",
    text: '"Me chamo Guilherme, tenho 23 anos, e havia me afastado de Deus por um longo tempo. Porém, o Eleutheria foi como uma guia para me reconectar e voltar para casa. No começo, senti um nervosismo de ir para um lugar onde não conhecia ninguém, mas, depois de fazer algumas novas amizades e viver tudo o que aconteceu lá, com tantas pessoas buscando reencontrar Deus e renovar sua fé, as pregações de pessoas incríveis me inspiraram muito. Hoje, não consigo mais imaginar minha vida fora da casa do Pai. Sem dúvida, participarei sempre que puder."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/img/testemunhos/guilherme_bueno.webp",
  },
  {
    name: "Maria Natália",
    text: '"Eu me chamo Maria Natália, tenho 25 anos e o Eleutheria foi o meu primeiro retiro. Não participei de outros retiros por medo e insegurança, mas estava afastada da fé e decidi que era hora de mudar. E essa foi a melhor escolha! Conheci pessoas novas, me senti muito acolhida e acima de tudo, me reencontrei com Deus! Foi uma experiência infinitamente maravilhosa! Sinto que minha vida mudou completamente, após o retiro! "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/img/testemunhos/natalia.webp",
  },
  {
    name: "Rafael",
    text: '"Meu nome é Rafael, tenho 24 anos, e participar do retiro Eleutheria foi uma experiência que realmente marcou minha vida. Confesso que fiquei um pouco receoso, sem saber bem como funcionava ou o que esperar, mas decidi me entregar à experiência. Durante o retiro, fui surpreendido várias vezes pelas conversas, orações e até momentos de silêncio, que me ajudaram a sentir a presença de Deus. O Eleutheria foi um ponto de virada. Ali comecei a enxergar minha fé com mais profundidade, e essa nova caminhada tem sido transformadora. Acredito que saíra de lá renovado, com um propósito claro, e a certeza real de que Deus está ao nosso lado"',
    image: "/img/testemunhos/rafael.webp",
  },
  {
    name: "Giovana Schicovski",
    text: '"Meu nome é Giovana tenho 17 anos, participei do retiro Eleutheria ano passado, me reconectei profundamente com Jesus de uma forma que nunca imaginei. Foi ali que, com o coração aberto, me entreguei de uma vez por todas à Ele. Lembro com carinho de todos os momento sem que senti Sua presença de maneira tão forte, como tudo que estava ao meu redor sumisse e fosse apenas eu e ele. Eleutheria é muito mais que um retiro, é um tempo de cura e renovação. Cada oração, cada reflexão, cada momento de partilha, me aproximaram mais de Jesus e me ajudaram a entender o quanto Ele me ama."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/img/testemunhos/giovana_schicovski.webp",
  },
  {
    name: "Bianca",
    text: '"Me chamo Bianca, tenho 16 anos, e o Eleutheria foi um retiro que transformou minha vida. No começo, senti medo por não conhecer ninguém, mas decidi ir. E que escolha incrível! Lá, senti a presença de Deus de uma forma indescritível, vivi experiências que transformam qualquer pessoa e fiz amizades maravilhosas. O Eleutheria é muito mais que um retiro: é um lugar de renovação, fé e conversão. Sem dúvidas, voltarei muitas vezes!"ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/img/testemunhos/bianca.webp",
  },
  {
    name: "Giovana Cruz",
    text: '"Me chamo Giovana, tenho 18 anos e com certeza o Eleutheria foi a melhor experiência da minha vida. O retiro onde eu conseguia ver Jesus em todas as pessoas, tanto as que serviram e se doaram muito para estar ali, quanto nos retirantes também. Tive minha primeira experiência pessoal com Cristo no retiro e nunca esqueço de nenhum momento que vivi ali, das palestras, das orações, dos momentos de adoração, do sorriso de cada um, da comida muito boa nunca me senti tão bem, acolhida e tão feliz em toda minha vida, mesmo. Eleutheria é uma benção, e grande graça do Senhor foi participar."ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ',
    image: "/img/testemunhos/giovana_cruz.webp",
  },
  {
    name: "Murilo",
    text: '"Me chamo Murillo, tenho 20 anos. Recebi o convite para o retiro de quem eu menos esperava. Como estava de boa, resolvi ir. Três dias parecem muito tempo, mas lá esses três dias pareceram horas. Eu até queria ficar mais! Foram os três dias mais importantes da minha vida, onde realmente entendi que o propósito da vida é Deus, Ele transformou minha vida de uma forma que eu não sei explicar; Ele encheu o vazio do meu coração. Lá conheci pessoas que me aproximaram de Deus, só tenho a agradecer. Se você tiver a oportunidade de participar, vá! Não pense duas vezes; Se entregue completamente! Assim como Ele mudou minha vida, pode mudar a sua."',
    image: "/img/testemunhos/anonimo.webp",
  },
  // Adicione os outros testemunhos aqui
];

export default function Testemunhos() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="testemunhos"
      className="flex flex-col items-center justify-center p-4 bg-[#78662b]/10"
    >
      <h1 className={`${playfair.className} font-bold text-2xl md:text-4xl`}>
        Testemuhos
      </h1>
      <Carousel
        withIndicators
        w={500}
        slideSize={isDesktop ? "33.333333%" : "100%"}
        emblaOptions={{
          loop: true,
          align: "center",
        }}
        className="max-w-10/12 md:min-w-8/12"
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center max-w-11/12 h-10/12 bg-[#1c1d28]/10 m-8 rounded-2xl p-4 gap-2">
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                radius="md"
                size="xl"
                variant="filled"
                className="md:min-h-20"
              />
              <p className={`${playfair.className} text-lg font-bold`}>
                {testimonial.name}
              </p>
              <p className="text-xs md:text-sm">{testimonial.text}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}
