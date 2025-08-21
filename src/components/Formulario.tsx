import estilos from "./Formulario.module.css";

export default function Formulario() {
  return (
    <form action="" className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite o nome completo"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Informe um email válido"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem: </label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva a sua mensagem aqui"
        ></textarea>
      </div>
      <div className={estilos.campo}>
        <button type="submit" className={estilos.botao}>
          Enviar
        </button>
      </div>
    </form>
  );
}
