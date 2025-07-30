import Link from "next/link";
import React from "react";
import Menu from "../menu/page";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <Link href="">Petshop</Link>
      </h1>
      <Menu />
    </header>
  );
}
