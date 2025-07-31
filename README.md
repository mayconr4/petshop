# Petshop

Projeto de uma aplicação web SPA usando Next.js, Typescript e Supabase
(Baas - Back-End as a Service).

## 02_Paginas-basicas-links-ajustes-de-layout-metadados

- Criação das páginas/rotas (usando pastas e arquivo page)
- Definição de metadados específicos para cada página
- Adição do componente `<Link>` para navegação entre as rotas
- Ajustes diversos de estrutura HTML

### 31/07

No componente `Menu.tsx`, faça a programação necessária para detectar qual rota/página no momento e,com isso deixar a classe `ativo` aplicada ao `Link` correspondente.

---

## 01_css-global-fonts-faviocn-metadados

- Adição de estilos globais
- Importação, configuração e aplicação de fonts da web usando `next/fonts`
- Adição de mais metadados
- Aplicação automática de favicon adicionando arquivo `icon.png` direto na pasta `app`

---

## 00_projeto-zerado

Ajustes e remosões e exclusões de elmentos da instalação padrão do Next.js

### Revisando tópicos importantes

- `src/app/page.tsx`: página (index,Home). O nome do arquivo **Precisa ser**
  `page.tsx`, mas o nome interno (na função) pode ser qualquer um.

- `src/app/layout.tsx`:componente/arquivo especial que define a estrututura padrão(layout) para todas as páginas.
