import { SlidersHorizontal } from 'phosphor-react';
import React from 'react';
import Cabecalho from '../../componentes/Cabecalho';
import NewFeatured from '../../componentes/NewFeatured';
import Rodape from '../../componentes/Rodape/Index';
import './style.css';
import plantasPopulares from './plantasPopulares.jpg';

const produtos = [
  {
    id: 1,
    imagem: plantasPopulares,
    nome: 'Juicy Plant',
    preco: 150,
    favorito: false,
  },

  {
    id: 2,
    imagem: plantasPopulares,
    nome: 'Strawberry Plant',
    preco: 0.9,
    favorito: true,
  },

  {
    id: 3,
    imagem: plantasPopulares,
    nome: 'Ananas Plant',
    preco: 122,
    favorito: false,
  },

  {
    id: 4,
    imagem: plantasPopulares,
    nome: 'Cactus Plant',
    preco: 200,
    favorito: true,
  },
];

export default function PopularItems() {
  return (
    <>
      <Cabecalho />
      <div className="titleIcon">
        <h2>Popular Items</h2>
        <SlidersHorizontal size={32} weight="fill" />
      </div>
      <div className="popularItemsContent">
        <p className="titleNewFeat">New & Featured</p>
        <div className="conjuntoItemsPopular">
          {produtos.map((produto) => (
            <NewFeatured key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
      <Rodape />
    </>
  );
}
