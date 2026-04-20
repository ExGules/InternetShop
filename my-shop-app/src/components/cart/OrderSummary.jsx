import React from 'react';
import Button from '../common/Button';

const OrderSummary = ({ items, isPromoApplied }) => {
  const orderPrice = items.reduce((sum, item) => {
    const price = item.currentPrice || item.price;
    return sum + (price * item.quantity);
  }, 0);

  const discount = isPromoApplied ? orderPrice * 0.1 : 0;

  const delivery = 15;

  const total = orderPrice - discount + delivery;

  const handleCheckout = () => {
    console.log({
      items,
      orderPrice,
      discount,
      delivery,
      total,
      promo: isPromoApplied ? "ilovereact" : null
    });
  };

  return (
    <div className="order">
      <div className="title">Your Order</div>

      <div className="order-price-wrapper">

        <div className="price-row">
          <div className="name">Order price</div>
          <div className="price">${orderPrice.toFixed(2)}</div>
        </div>

        <div className="price-row">
          <div className="name">Discount for promo code</div>
          <div>
            {isPromoApplied ? "10%" : "No"}
          </div>
        </div>

        <div className="price-row delimiter">
          <div className="name">
            Delivery <span className="additional">(Aug 02 at 16:00)</span>
          </div>
          <div className="price">${delivery.toFixed(2)}</div>
        </div>

        <div className="price-row total">
          <div className="name">Total</div>
          <div className="price">${total.toFixed(2)}</div>
        </div>

      </div>

      <div className="button-wrapper">
        <Button className="button" onClick={handleCheckout}>
          Checkout
        </Button>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default OrderSummary;