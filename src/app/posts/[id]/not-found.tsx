// src/app/posts/[id]/not-found.tsx
import Container from "@/components/Container";
import estilos from "./not-found.module.css";
import Link from "next/link";

export default function PostNaoEncontrado() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops! post não encontrado</h2>
      <Container>
        <p>O post que você está tentando acessar não existe.</p>
        <p>
          <Link href="/">Voltar para página inicial</Link>
        </p>
      </Container>
    </section>
  );
}
