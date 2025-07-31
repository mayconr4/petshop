// src/app/not-found.tsx
import { Metadata } from "next";
import estilos from "./not-found.module.css";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Página não encontrada | PetShop",
  robots: "noindex",
};

export default function Pagina404() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops! Página não encontrada!</h2>
      <Container>
        <div className={estilos.imagem404}>
          <img src="/images/404.svg" alt="Cachorro desorientado ?" />
          <p>
            <Link href="/">Voltar pará á pagina inicial</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
