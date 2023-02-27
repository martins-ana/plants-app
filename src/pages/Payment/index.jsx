import React from 'react';
import ConfirmButton from '../../componentes/ConfirmButtom';
import PaymentMethods from '../../componentes/PaymentMethods';

export default function Payment() {
  return (
    <>
      <div>
        <h2>Payment</h2>
        <p>Select the payment method you want to use</p>
        <div>
          <PaymentMethods />
          <ConfirmButton />
        </div>
      </div>
    </>
  );
}
