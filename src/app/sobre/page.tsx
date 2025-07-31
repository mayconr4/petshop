// serc/app/sobre/page.tsx
import { Metadata } from "next";
import React from "react";
import estilos from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Missão Visão e valores",
};

export default function Sobre() {
  return (
    <section className={estilos.conteudo}>
      <h2>Sobre Nós</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        aperiam architecto deleniti porro velit quas ipsam natus harum
        consectetur! Ex ducimus labore harum! Soluta quaerat, ex quia esse
        ducimus pariatur.
      </p>
    </section>
  );
}
