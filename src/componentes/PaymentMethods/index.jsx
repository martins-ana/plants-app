import { Circle } from 'phosphor-react';
import React from 'react';
import './style.css';
import paytm from './paytmPayment.png';

export default function PaymentMethods() {
  return (
    <>
      <div className="Payments">
        <img src={paytm} alt="forma de pagamento paytm" />
        <p>Paytm</p>
        <Circle size={32} />
      </div>
    </>
  );
}
