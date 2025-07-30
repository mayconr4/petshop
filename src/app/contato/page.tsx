import { Metadata } from "next";
import { title } from "process";
import React from "react";

export default function Contato() {
  return (
    <section>
      <h2>Contato</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam
        ipsa voluptas, deleniti aperiam numquam exercitationem! At obcaecati
        quia blanditiis, sed velit odit, incidunt fuga maxime earum doloribus
        maiores vel.
      </p>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: " veja o Nosso contato ",
};
