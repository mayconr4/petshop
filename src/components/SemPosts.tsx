//src/components/SemPosts.tsx

import Container from "./Container";
import estilos from "./SemPosts.module.css";

export default function SemPosts() {
  return (
    <Container>
      <p className={estilos.semPosts}>
        Nenhum post encontrado! Tente Novamente mais tarde.
      </p>
    </Container>
  );
}
