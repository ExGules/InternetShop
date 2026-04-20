import React, { useState } from 'react';
import CartProductList from './CartProductList';
import OrderSummary from './OrderSummary';
import PromoCode from './PromoCode';
import '../../styles/card.css';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onAddToFavorites, favorites }) => {

  const [isPromoApplied, setIsPromoApplied] = useState(false);

  return (
    <div className="container">
      <div className="cart">
        <div className="order-wrapper">
          <CartProductList 
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />

          <OrderSummary 
            items={cartItems}
            isPromoApplied={isPromoApplied}
          />
        </div>

        <PromoCode 
          onApplyPromo={setIsPromoApplied}
          onAddToFavorites={onAddToFavorites}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

export default Cart;