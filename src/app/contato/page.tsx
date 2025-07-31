// serc/app/contato/page.tsx
import { Metadata } from "next";
import { title } from "process";
import React from "react";
import estilos from "./contato.module.css";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Fale conosco...",
};

export default function Contato() {
  return (
    <section className={estilos.conteudo}>
      <h2>Contato</h2>
      <p>
        Você pode nos enviar um e-mail para{" "}
        <a href="mailto:contato@petshop.com">contato@petshop.com</a> ou nos
        ligar pelo telefone <a href="tel:+5511999999999">+55 11 99999-9999</a>
      </p>

      <p>Se preferir, use o formulário abaixo:</p>
    </section>
  );
}
