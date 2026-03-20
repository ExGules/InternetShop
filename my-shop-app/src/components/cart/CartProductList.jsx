import React from 'react';
import CartProductItem from './CartProductItem';

const CartProductList = () => {
  const products = [
    {
      title: 'Fashionee - catton shirt',
      size: 'S',
      oldPrice: 52.99,
      currentPrice: 35.99,
      quantity: 1
    },
    {
      title: 'Fashionee - catton shirt',
      size: 'S',
      oldPrice: null,
      currentPrice: 110.99,
      quantity: 1
    }
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <CartProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default CartProductList;