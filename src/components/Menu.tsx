// src/components/Menu.tsx
"use client"; // necessário para usar hooks no Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import estilos from "./Menu.module.css";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className={estilos.menu}>
      <Link
        href="/"
        className={
          pathname === "/"
            ? /*se for === as / passo a estilos.ativo caso não for desativo a estilização */ estilos.ativo
            : ""
        }
      >
        Blog
      </Link>
      <Link
        href="/produtos"
        className={pathname === "/produtos" ? estilos.ativo : ""}
      >
        Produtos
      </Link>
      <Link
        href="/sobre"
        className={pathname === "/sobre" ? estilos.ativo : ""}
      >
        Sobre
      </Link>
      <Link
        href="/contato"
        className={pathname === "/contato" ? estilos.ativo : ""}
      >
        Contato
      </Link>
    </nav>
  );
}
