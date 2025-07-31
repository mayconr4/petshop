// serc/app/produtos/page.tsx
import { Metadata } from "next";
import React from "react";
import estilos from "./produtos.module.css";

export const metadata: Metadata = {
  title: "Produtos | PetShop",
  description: "Produtos diponiveis...",
};

export default function Produtos() {
  return (
    <section className={estilos.conteudo}>
      <h2>Produtos</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eveniet,
        error, maxime accusamus consequatur magni sequi natus corporis at libero
        deserunt hic eaque ex rerum. Amet molestias reiciendis fugit laboriosam.
      </p>

      {/* section>h2+p */}
    </section>
  );
}
