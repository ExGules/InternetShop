import React from 'react';

const CartProductItem = ({ product }) => {
  const { title, size, oldPrice, currentPrice, quantity, photo } = product;

  return (
    <div className="product">
      <div className="photo" style={photo ? { backgroundImage: `url(${photo})` } : {}}></div>
      <div className="product-info">
        <div className="title">{title} {size && `(${size})`}</div>
        <div className="price-wrapper">
          <div className="price-and-quanity">
            <div className="price">
              {oldPrice && <div className="old-price">${oldPrice.toFixed(2)}</div>}
              <div className="carrent-price">${currentPrice.toFixed(2)}</div>
            </div>
            <div className="quantity">
              <div className="count-button">-</div>
              <div className="count">{quantity}</div>
              <div className="count-button">+</div>
            </div>
          </div>
          <div className="total-price">${(currentPrice * quantity).toFixed(2)}</div>
        </div>
        <div className="close">X</div>
      </div>
    </div>
  );
};

export default CartProductItem;