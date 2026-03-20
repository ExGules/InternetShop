import React from 'react';
import favoriteIcon from '../../assets/icons/favorite.svg';

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, label, photo } = product;

  return (
    <div className="product">
      <div className="photo" style={photo ? { backgroundImage: `url(${photo})` } : {}}>
        <div className="top-bar">
          <div className="labels">
            {label && <div className={`label ${label.toLowerCase()}`}>{label}</div>}
          </div>
          <div className="favorites">
            <img src={favoriteIcon} alt="favorite" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">
          <div className="carrent-price">${price.toFixed(2)}</div>
          {oldPrice && <div className="old-price">${oldPrice.toFixed(2)}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;