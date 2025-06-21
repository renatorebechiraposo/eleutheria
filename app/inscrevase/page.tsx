"use client";
import classes from "@/components/Layout.module.css";
import {
  Blockquote,
  Button,
  Fieldset,
  Group,
  NumberInput,
  Radio,
  Select,
  Space,
  TextInput,
} from "@mantine/core";

import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";

import { IconInfoCircle } from "@tabler/icons-react";

import { useState } from "react";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@mantine/dates/styles.css";

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
  const [form, setForm] = useState({
    nome: "",
    rg: "",
    dataNascimento: "",
    sexo: "",
    estadoCivil: "",
    whatsapp: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    // const res = await fetch("/api/cadastro", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // const data = await res.json();
    // alert(data.id ? "Salvo com sucesso!" : data.error);
  };

  const icon = <IconInfoCircle />;

  return (
    <div
      className={`flex min-h-screen p-4 justify-center ${openSans.className}`}
    >
      <div className={`${classes.layoutGray} rounded-lg p-6 w-full max-w-3xl`}>
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
            <div key={index}>
              <strong>{item.title}:</strong> {item.content}
              <Space h="md" />
            </div>
          ))}
        </Blockquote>
        <Space h="lg" />
        <form onSubmit={handleSubmit}>
          <Fieldset legend="Informações Pessoais" radius="lg">
            <TextInput
              mb={20}
              radius="md"
              required={true}
              name="nome"
              label="Deus te chama pelo nome, qual é o seu?"
              description="Nome Completo"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
            <DateInput
              mb={20}
              radius="md"
              required={true}
              name="dataNascimento"
              valueFormat="DD/MM/YYYY"
              label="Data de Nascimento"
              description="Informe a data de nascimento"
              value={
                form.dataNascimento ? dayjs(form.dataNascimento).toDate() : null
              }
              onChange={(date) =>
                setForm({
                  ...form,
                  dataNascimento: date ? date.toString() : "",
                })
              }
            />
            <Radio.Group
              mb={20}
              name="sexo"
              label="Sexo"
              description="Selecione seu sexo"
              required={true}
              value={form.sexo}
              onChange={(value) => setForm({ ...form, sexo: value })}
            >
              <Group mt="xs">
                <Radio value="masculino" label="Masculino" />
                <Radio value="feminino" label="Feminino" />
              </Group>
            </Radio.Group>
            <Select
              mb={20}
              radius="md"
              required={true}
              name="estadoCivil"
              label="Estado Civil"
              value={form.estadoCivil}
              onChange={(value) =>
                setForm({ ...form, estadoCivil: value ?? "" })
              }
              placeholder="Selecione seu estado civil"
              data={["Solteiro", "Casado", "Divorciado", "Viúvo", "Amasiado"]}
            />
            <NumberInput
              mb={20}
              radius="md"
              required={true}
              hideControls={true}
              allowNegative={false}
              allowDecimal={false}
              name="rg"
              label="RG"
              description="Apenas números, sem pontos ou traços"
              placeholder="Digite seu RG"
              value={form.rg}
              onChange={(value) =>
                setForm({ ...form, rg: value === "" ? "" : String(value) })
              }
            />
            <NumberInput
              mb={20}
              radius="md"
              required={true}
              name="whatsapp"
              label="WhatsApp"
              description="Apenas números, sem pontos ou traços"
              placeholder="Digite seu WhatsApp"
              type="tel"
              hideControls={true}
              allowNegative={false}
              allowDecimal={false}
              value={form.whatsapp}
              onChange={(value) =>
                setForm({
                  ...form,
                  whatsapp: value === "" ? "" : String(value),
                })
              }
            />
          </Fieldset>
          <div className="flex mt-4 justify-center items-center w-full">
            <Button variant="filled" color="yellow" type="submit">
              Inscrever-se
            </Button>
          </div>
        </form>
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
