import React from 'react';
import DotPattern from '../common/DotPattern';

const CartHeader = () => {
  return (
    <div className="first-screen">
      <div className="content-shop">
        <DotPattern />
        <div className="text-content-shop">Cart</div>
        <div className="bread-crumbs">
          <div className="vertical-line"></div>
          <div className="text-home">Home</div>
          <div className="text-shop">Shop</div>
          <div className="text-cart">Cart</div>
        </div>
        <div className="horizontal-line"></div>
      </div>
      <div className="image-shop">
        
      </div>
    </div>
  );
};

export default CartHeader;