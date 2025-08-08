// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import { Post } from "@/types/Post";
import SemPosts from "@/components/SemPosts";

export default async function Home() {
  const reposta = await fetch(`http://localhost:2112/posts`, {
    // Revalidamos o cache do next a cada requisição para garantir que os dados estejam sempre atualizados
    next: { revalidate: 0 },
  });

  if (!reposta.ok) {
    throw new Error("Erro ao buscar os posts: " + reposta.statusText);
  }

  const posts: Post[] = await reposta.json();
  console.log(posts);

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>

      {/* Renderização CONDICIONAL 
      
Se não tiver posts, então renderize o componente Semposts Caso contrário, renderize o ListaPosts      
      */}
      {posts.length === 0 ? <SemPosts /> : <ListaPosts posts={posts} />}
    </section>
  );
}
