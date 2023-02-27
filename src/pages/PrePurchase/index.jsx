import React from 'react';
import Cabecalho from '../../componentes/Cabecalho';
import ItemPrePurchase from '../../componentes/ItemPrePurchase';
import Rodape from '../../componentes/Rodape/Index';
import SizeList from '../../componentes/SizeList/inde';
import './style.css';

export default function PrePurchase() {
  return (
    <>
      <Cabecalho />
      <section className="containerPrePurchase">
        <ItemPrePurchase />
        <SizeList />
      </section>
      <Rodape />
    </>
  );
}
