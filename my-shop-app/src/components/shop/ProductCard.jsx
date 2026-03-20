import React, { useState } from 'react';
import favoriteIcon from '../../assets/icons/favorite.svg';
import favoriteFilledIcon from '../../assets/icons/favorite-filled.svg';

const ProductCard = ({ product, isFavorite, onAddToFavorites, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  // Определяем тип метки (Sale или New)
  const getLabel = () => {
    if (product.isSale) return 'Sale';
    if (product.isNew) return 'New';
    return null;
  };

  const label = getLabel();

  const handleAddToCart = () => {
    // Создаем объект товара для корзины с нужными полями
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      image: product.image,
      quantity: quantity
    };
    onAddToCart(cartProduct, quantity);
    setQuantity(1);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onAddToFavorites(product);
  };

  return (
    <div className="product">
      <div className="photo" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="top-bar">
          <div className="labels">
            {label && <div className={`label ${label.toLowerCase()}`}>{label}</div>}
          </div>
          <div className="favorites" onClick={handleFavoriteClick} style={{ cursor: 'pointer' }}>
            <img 
              src={isFavorite ? favoriteFilledIcon : favoriteIcon} 
              alt="favorite"
              style={{ width: '20px', height: '20px' }}
            />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="price">
          <div className="carrent-price">${product.price.toFixed(2)}</div>
          {product.oldPrice && (
            <div className="old-price">${product.oldPrice.toFixed(2)}</div>
          )}
        </div>
        <div className="cart-controls">
          <div className="quantity-selector">
            <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          <button className="buy-button" onClick={handleAddToCart}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;