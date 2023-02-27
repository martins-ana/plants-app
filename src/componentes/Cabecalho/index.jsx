import {
  DotsThreeOutlineVertical,
  List,
  MagnifyingGlass,
} from 'phosphor-react';
import React from 'react';
import './style.css';

export default function Cabecalho() {
  return (
    <>
      <header className="cabecalho">
        <List className="iconMenu" size={32} weight="fill" />
        <div>
          <MagnifyingGlass className="iconSearch" size={32} />
          <DotsThreeOutlineVertical
            className="iconMenuVert"
            size={32}
            weight="fill"
          />
        </div>
      </header>
    </>
  );
}
