import { Heart } from 'phosphor-react';
import React, { useState } from 'react';
import './style.css';

export default function NewFeatured({ produto }) {
  const [liked, setLiked] = useState(produto.favorito);

  function handleLiked() {
    setLiked(!liked);
  }

  return (
    <div className="popularItems">
      <img
        className="imgPopularPlants"
        src={produto.imagem}
        alt="planta da espécie suculenta em vasos"
      />
      <div className="productInfo">
        <p>{produto.nome}</p>
        <Heart
          size={32}
          onClick={handleLiked}
          weight={liked ? 'fill' : 'regular'}
        />
      </div>
      <p className="preco">${produto.preco}</p>
    </div>
  );
}
