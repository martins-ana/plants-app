import React from 'react';
import LoginCreateAccount from '../../componentes/LoginCreateAccount';
import Logo from '../../componentes/Logo';
import './style.css';

export default function CadastroLogin() {
  return (
    <div className="background">
      <header>
        <Logo />
      </header>
      <LoginCreateAccount>Log In</LoginCreateAccount>
      <LoginCreateAccount>Create Account</LoginCreateAccount>
    </div>
  );
}
