import React from 'react';
import './style.css';

export default function SizeList() {
  return (
    <>
      <div className="sizeList">
        <p>Size:</p>
        <button className="buttonSizeList">6 inch</button>
        <button className="buttonSizeList">8 inch</button>
        <button className="buttonSizeList">10 inch</button>
      </div>
      <div className="quantityList">
        <p>Quantity:</p>
        <button className="buttonQuantityList">-</button>
        <button className="buttonQuantityList">0</button>
        <button className="buttonQuantityList">+</button>
      </div>
    </>
  );
}
