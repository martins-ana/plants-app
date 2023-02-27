import { Heart } from 'phosphor-react';
import React from 'react';
import './style.css';
import AloePlant from './aloePlant.jpg';

export default function ItemPrePurchase() {
  return (
    <>
      <div className="prePurchase">
        <h2 className="titlePrePurchase">Aloe Plant</h2>
        <img
          className="aloePlant"
          src={AloePlant}
          alt="Vaso com planta pequenininho"
        />
        <div className="descricaoPrePurchase">
          <p>$ 100</p>
          <Heart size={32} />
        </div>
      </div>
    </>
  );
}
