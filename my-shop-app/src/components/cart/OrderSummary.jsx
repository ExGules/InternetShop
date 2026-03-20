import React from 'react';
import Button from '../common/Button';

const OrderSummary = () => {
  const orderPrice = 146.98;
  const delivery = 16;
  const total = 162.98;

  return (
    <div className="order">
      <div className="title">You Order</div>
      <div className="order-price-wrapper">
        <div className="price-row">
          <div className="name">Order price</div>
          <div className="price">${orderPrice.toFixed(2)}</div>
        </div>
        <div className="price-row">
          <div className="name">Discount for promo code</div>
          <div>No</div>
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
        <Button className="button">Checkout</Button>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default OrderSummary;