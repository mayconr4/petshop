// src/components/Container.tsx
import { strict } from "assert";
import estilos from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className={estilos.container}>{children}</div>;
}
