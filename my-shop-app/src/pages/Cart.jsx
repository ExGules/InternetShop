import React from 'react';
import Header from '../components/layout/Header';
import CartHeader from '../components/cart/CartHeader';
import CartProductList from '../components/cart/CartProductList';
import OrderSummary from '../components/cart/OrderSummary';
import PromoCode from '../components/cart/PromoCode';
import Footer from '../components/layout/Footer';
import '../styles/card.css'; // Подключаем стили для корзины

const Cart = () => {
  return (
    <>
      <Header />
      <CartHeader />
      <div className="container">
        <div className="cart">
          <div className="order-wrapper">
            <CartProductList />
            <OrderSummary />
          </div>
          <PromoCode />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;