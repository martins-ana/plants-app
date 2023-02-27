import React from 'react';
import './style.css';

export default function FormCreateAccount() {
  return (
    <>
      <h2 className="titleCreateAccount">Create Account</h2>
      <input className="input-cadastro" type="text" placeholder="First Name" />
      <input className="input-cadastro" type="text" placeholder="Last Name" />
      <input className="input-cadastro" type="email" placeholder="Email" />
      <input
        className="input-cadastro"
        type="password"
        placeholder="Password"
      />
      <input className="input-cadastro" type="tel" placeholder="Phone" />
      <input className="input-cadastro" type="text" placeholder="CPF" />
      <button className="register" type="submit">
        Register
      </button>
    </>
  );
}
