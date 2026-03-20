import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import searchIcon from '../../assets/icons/search.svg';
import seasonSaleBanner from '../../assets/images/season-sale.svg';

const Sidebar = () => {
  const categories = ['All', 'Men', 'Women', 'Accessories', 'New Arrivals'];
  const colors = ['Black', 'Blue', 'Red', 'Yellow', 'Green'];
  
  const reviewedProducts = [
    { name: 'Retro style handbag', price: 35.99, oldPrice: 52.99 },
    { name: 'Warm casual sweater', price: 35.99 },
    { name: 'Textured turtleneck with zip', price: 35.99 }
  ];

  return (
    <div className="sidebar">
      <div className="search">
        <label>
          <Input type="text" placeholder="Search" className="search-row" />
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </label>
      </div>

      {/* Categories */}
      <div className="sidebar-item">
        <div className="sidebar-title">Categories</div>
        <div className="sidebar-content">
          <ul className="custom-list">
            {categories.map((category, index) => (
              <li key={index} className={`item ${category === 'Men' ? 'active' : ''}`}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Price */}
      <div className="sidebar-item">
        <div className="sidebar-title">Price</div>
        <div className="sidebar-content">
          <div className="price-bar">
            <Input type="text" placeholder="0" />
            <Input type="text" placeholder="200" />
          </div>
        </div>
      </div>

      {/* Color */}
      <div className="sidebar-item">
        <div className="sidebar-title">Color</div>
        <div className="sidebar-content">
          <div className="colors">
            {colors.map((color) => (
              <div className="color" key={color}>
                <input 
                  type="checkbox" 
                  className="color-checkbox" 
                  id={color} 
                  name={color} 
                  value={color.toLowerCase()} 
                />
                <label htmlFor={color} className="color-name">{color}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Filter Button */}
      <div className="sidebar-item">
        <div className="button-wrapper">
          <Button>Apply Filter</Button>
          <div className="vertical-line"></div>
        </div>
      </div>

      {/* Reviewed Products */}
      <div className="sidebar-item">
        <div className="sidebar-title">Reviewed by you</div>
        <div className="sidebar-content">
          <div className="reviewed-products">
            {reviewedProducts.map((product, index) => (
              <div className="product" key={index}>
                <div className="image"></div>
                <div className="info">
                  <div className="name">{product.name}</div>
                  <div className="price">
                    <div className="carrent-price">${product.price.toFixed(2)}</div>
                    {product.oldPrice && (
                      <div className="old-price">${product.oldPrice.toFixed(2)}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Season Sale Banner */}
      <div>
        <a href="#">
          <img src={seasonSaleBanner} alt="season sale banner" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;