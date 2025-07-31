// serc/app/page.tsx
import { Metadata } from "next";
import estilos from "./page.module.css";

export const metadata: Metadata = {
  title: "Home | PetShop",
  description: "Venha conhecer mais ",
};

export default function Home() {
  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, magnam
        expedita! Aperiam sunt veritatis voluptatum repellendus magni delectus
        dolorum fuga aspernatur architecto placeat reprehenderit porro culpa,
        neque saepe et minima!
      </p>
    </section>
  );
}
