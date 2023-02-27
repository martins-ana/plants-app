import React from 'react';
import './style.css';
import PlantasInteriores from './plantasInterioresUm.jpg';

export default function IndoorPlants() {
  return (
    <>
      <p className="titleInPlants">Indoor Plants</p>
      <div className="plantasIn">
        <img
          className="plantasInteriores"
          src={PlantasInteriores}
          alt="plantas de interiores"
        />
      </div>
    </>
  );
}
