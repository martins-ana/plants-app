import React from 'react';
import Logoimg from './logo.png';
import './style.css';

export default function Logo() {
  return (
    <img
      className="logo"
      src={Logoimg}
      alt="planeta cheio de natureza, com borboleta gigante verde em cima"
    />
  );
}
