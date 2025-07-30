// serc/app/layout.tsx
import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Cabecalho from "@/components/cabecalho/page";

/* Coinfigura varáveis paras as fontes */
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetShop",
  description: "Mini portal de Petshop com noticías, produtos e muito mais",
  keywords: ["petshop", "animais", "cachorros", "gatos"],
  authors: [
    {
      name: "Maycon",
      url: "https://github.com/mayconR4",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${fjallaOne.variable}`}>
        <Cabecalho />
        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
