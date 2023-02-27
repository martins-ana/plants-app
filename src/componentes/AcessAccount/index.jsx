import React from 'react';
import './style.css';

export default function AcessAccount() {
  return (
    <form>
      <input className="inputAcessAccount" type="text" placeholder="Email" />
      <input className="inputAcessAccount" type="text" placeholder="Senha" />
      <button className="botao" type="submit">
        Entrar
      </button>
    </form>
  );
}
