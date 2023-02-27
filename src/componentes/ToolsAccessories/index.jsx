import React from 'react';
import './style.css';
import FerramentasAcessorios from './ferramentasAcessoriosUm.jpg';

export default function ToolsAccessories() {
  return (
    <>
      <p className="titleToAccessories">Tools & Accessories</p>
      <div className="ToAccess">
        <img
          className="toolsAccessories"
          src={FerramentasAcessorios}
          alt="ferramentas e acessórios de plantas"
        />
      </div>
    </>
  );
}
