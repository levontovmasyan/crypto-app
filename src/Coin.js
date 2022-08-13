import React from 'react';
import './Coin.css'
const Coin = ({name , price , symbol , volume , image , priceChange }) => {
  return (
    <div className='container'>
      <div className='coin-row'>
        <div className='card'>
          <img className='coin-image' src={image} alt='crypto' />
          <h1>{name}</h1>
          <br/>
          <p className='coin-symbol yellow'>Symbol :{symbol.toUpperCase()}</p>
        </div>
        <div className='drink-body'>
          <p className='coin-price '>Price: ${price}</p>
          <br/>
          <p className='coin-volume '>Volume: ${volume.toLocaleString()}</p>
          <br/>
          {priceChange < 0 ? (
            <p className='coin-percent red'>Price Change: {priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>Price Change: {priceChange.toFixed(2)}%</p>
          )}
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Coin;
