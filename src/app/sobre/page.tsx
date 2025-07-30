import { Metadata } from "next";
import React from "react";

export default function Sobre() {
  return (
    <section>
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
export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Conheça mais sobre nós",
};
