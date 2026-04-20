import React from 'react';

const CartProductItem = ({ product, onUpdateQuantity, onRemove }) => {
  const { name, title, size, oldPrice, currentPrice, price, quantity, photo, image } = product;
  
  // Поддержка разных названий полей
  const productName = name || title;
  const productPrice = currentPrice || price;
  const productOldPrice = oldPrice;

  return (
    <div className="product">
      <div
  className="photo"
  style={{ backgroundImage: `url(${photo || image})` }}
></div>
      <div className="product-info">
        <div className="title">{productName} {size && `(${size})`}</div>
        <div className="price-wrapper">
          <div className="price-and-quanity">
            <div className="price">
              {productOldPrice && <div className="old-price">${productOldPrice.toFixed(2)}</div>}
              <div className="carrent-price">${productPrice.toFixed(2)}</div>
            </div>
            <div className="quantity">
              <div className="count-button" onClick={() => onUpdateQuantity(quantity - 1)}>-</div>
              <div className="count">{quantity}</div>
              <div className="count-button" onClick={() => onUpdateQuantity(quantity + 1)}>+</div>
            </div>
          </div>
          <div className="total-price">${(productPrice * quantity).toFixed(2)}</div>
        </div>
        <div className="close" onClick={onRemove}>X</div>
      </div>
    </div>
  );
};

export default CartProductItem;