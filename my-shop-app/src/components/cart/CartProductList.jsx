import React from 'react';
import CartProductItem from './CartProductItem';

const CartProductList = ({ items, onUpdateQuantity, onRemoveItem }) => {
  if (!items || items.length === 0) {
    return <div className="empty-cart">Корзина пуста</div>;
  }

  return (
    <div className="product-list">
      {items.map((item) => (
        <CartProductItem 
          key={item.id}
          product={item}
          onUpdateQuantity={(newQuantity) => onUpdateQuantity(item.id, newQuantity)}
          onRemove={() => onRemoveItem(item.id)}
        />
      ))}
    </div>
  );
};

export default CartProductList;