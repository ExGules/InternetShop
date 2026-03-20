import React from 'react';
import DotPattern from '../common/DotPattern';

const ContentBlock = ({ title, onTitleClick }) => {
  const handleTitleClick = () => {
    if (onTitleClick) {
      onTitleClick(title);
    }
  };

  return (
    <div className="first-screen">
      <div className="content-shop">
        <DotPattern />
        <div 
          className="text-content-shop" 
          onClick={handleTitleClick}
          style={{ cursor: 'pointer' }}
        >
          {title}
        </div>
        <div className="bread-crumbs">
          <div className="vertical-line"></div>
          <div className="text-home">Home</div>
          <div 
            className="text-shop" 
            onClick={() => onTitleClick && onTitleClick('Shop')}
            style={{ cursor: 'pointer' }}
          >
            Shop
          </div>
          {title === 'Cart' && (
            <div 
              className="text-cart" 
              onClick={() => onTitleClick && onTitleClick('Cart')}
              style={{ cursor: 'pointer' }}
            >
              Cart
            </div>
          )}
        </div>
        <div className="horizontal-line"></div>
      </div>
      <div className="image-shop"></div>
    </div>
  );
};

export default ContentBlock;