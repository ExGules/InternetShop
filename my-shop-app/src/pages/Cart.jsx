import React from 'react';
import CartProductList from './CartProductList';
import OrderSummary from './OrderSummary';
import PromoCode from './PromoCode';


const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onAddToFavorites, favorites }) => {
  return (
    <div className="container">
      <div className="cart">
        <div className="order-wrapper">
          <CartProductList 
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
          <OrderSummary items={cartItems} />
        </div>
        <PromoCode 
          onAddToFavorites={onAddToFavorites}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

export default Cart;