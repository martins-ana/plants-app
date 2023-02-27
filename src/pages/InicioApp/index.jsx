import React from 'react';
import Cabecalho from '../../componentes/Cabecalho';
import IndoorPlants from '../../componentes/IndoorPlants';
import Rodape from '../../componentes/Rodape/Index';
import ToolsAccessories from '../../componentes/ToolsAccessories';
import './style.css';

export default function InicioApp() {
  return (
    <section className="onTopBelow">
      <Cabecalho />
      <div className="btnTitles">
        <button className="btn">All</button>
        <button className="btn">New</button>
        <button className="btn">Best Sellers</button>
      </div>
      <IndoorPlants />
      <ToolsAccessories />
      <Rodape />
    </section>
  );
}
