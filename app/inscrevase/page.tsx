"use client";

import { Blockquote } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

import { useState } from "react";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const information = [
  {
    title: "Data",
    content: "20, 21 e 22 de Junho/2025",
  },
  {
    title: "Música Tema",
    content: "Eis-me aqui – Colo de Deus",
  },
  {
    title: "Local",
    content: "Centro de Formação Religioso – Luiza G. Freguglia",
  },
  {
    title: "Cidade",
    content: "Santa Bárbara d’Oeste",
  },
  {
    title: "Saída",
    content: "20/06/2025 às 19h00 - Paróquia Santa Luzia",
  },
  {
    title: "Retorno",
    content: "22/06/2025 às 17h30 - Saída de Santa Bárbara d’Oeste",
  },
  {
    title: "Faixa etária",
    content: "14 a 30 anos",
  },
  {
    title: "Valor",
    content: "R$ 100 - 1° lote até 15/05",
  },
];

export default function Formulario() {
  const [form, setForm] = useState({ nome: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.id ? "Salvo com sucesso!" : data.error);
  };

  const icon = <IconInfoCircle />;

  return (
    <div
      className={`flex min-h-screen p-4 justify-center ${openSans.className}`}
    >
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            ELEUTHERIA 2026
          </h1>
          <p className="text-sm md:text-lg font-semibold text-gray-700">
            “Eis a vontade de Deus: A vossa Santificação”
          </p>
          <p className="text-xs text-gray-600 italic">I Tessalonicenses 4, 3</p>
        </div>
        <Blockquote
          color="yellow"
          icon={icon}
          iconSize={24}
          radius={"lg"}
          className="text-xs md:text-sm"
        >
          {information.map((item, index) => (
            <div key={index} className="mb-2">
              <strong>{item.title}:</strong> {item.content}
            </div>
          ))}
        </Blockquote>

        <h2 className="font-bold text-center mt-6 mb-6">
          Formulário de Inscrição
        </h2>
      </div>
    </div>
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input
  //       name="nome"
  //       value={form.nome}
  //       onChange={handleChange}
  //       placeholder="Nome"
  //     />
  //     <input
  //       name="email"
  //       value={form.email}
  //       onChange={handleChange}
  //       placeholder="Email"
  //     />
  //     <button type="submit">Salvar</button>
  //   </form>
  // );
}
