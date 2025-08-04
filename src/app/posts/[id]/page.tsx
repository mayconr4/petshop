// src/app/posts/[id]/page.tsx
import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";

interface DetalhePostProps {
  params: { id: string };
}

export default function DeralhePost({ params }: DetalhePostProps) {
  return (
    <article className={estilos.conteudo}>
      <h2>Post ID: {params.id}</h2>
      <Container>
        <h3>Categoria...</h3>
        <p>Descrição do post {params.id}...</p>
      </Container>
    </article>
  );
}
