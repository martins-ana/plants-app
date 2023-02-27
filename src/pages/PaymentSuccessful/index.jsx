import { CheckSquare } from 'phosphor-react';
import React from 'react';
import Cabecalho from '../../componentes/Cabecalho';
import Rodape from '../../componentes/Rodape/Index';
import './style.css';

export default function PaymentSucces() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <div className="paySucc">
          <CheckSquare className="iconCheck" size={64} weight="fill" />
          <p className="titlePayment">Payment Succesful</p>
        </div>
      </div>
      <Rodape />
    </>
  );
}
