import { Heart, House, ShoppingCartSimple, User } from 'phosphor-react';
import React from 'react';
import './style.css';

export default function Rodape() {
  return (
    <footer className="rodape">
      <House className="iconHouse" size={32} weight="fill" />
      <Heart className="iconFav" size={32} weight="fill" />
      <ShoppingCartSimple className="iconShop" size={32} weight="fill" />
      <User className="iconUser" size={32} weight="fill" />
    </footer>
  );
}
