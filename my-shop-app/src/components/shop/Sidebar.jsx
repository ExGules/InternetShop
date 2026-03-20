import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import searchIcon from '../../assets/icons/search.svg';
import seasonSaleBanner from '../../assets/images/season-sale.svg';
import productsData from '../../assets/data/products.json';

const Sidebar = ({ onFilterChange }) => {
  const products = productsData.products || productsData;
  
  // Получаем уникальные категории из всех товаров
  const allCategories = ['All', ...new Set(products.flatMap(p => p.categories))];
  
  // Получаем уникальные цвета
  const allColors = [...new Set(products.map(p => p.color))];
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // Получаем 3 товара для раздела "Reviewed by you"
  const reviewedProducts = products.slice(0, 3);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (onFilterChange) {
      onFilterChange({ category: category === 'All' ? null : category, colors: selectedColors, price: priceRange });
    }
  };

  const handleColorChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updatedColors);
    if (onFilterChange) {
      onFilterChange({ category: selectedCategory === 'All' ? null : selectedCategory, colors: updatedColors, price: priceRange });
    }
  };

  const handlePriceChange = (type, value) => {
    const updatedRange = { ...priceRange, [type]: value };
    setPriceRange(updatedRange);
    if (onFilterChange) {
      onFilterChange({ category: selectedCategory === 'All' ? null : selectedCategory, colors: selectedColors, price: updatedRange });
    }
  };

  const handleApplyFilter = () => {
    if (onFilterChange) {
      onFilterChange({ category: selectedCategory === 'All' ? null : selectedCategory, colors: selectedColors, price: priceRange });
    }
  };

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
            {allCategories.map((category, index) => (
              <li 
                key={index} 
                className={`item ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
                style={{ cursor: 'pointer' }}
              >
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
            <Input 
              type="number" 
              placeholder="Min" 
              value={priceRange.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
            />
            <Input 
              type="number" 
              placeholder="Max" 
              value={priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Color */}
      <div className="sidebar-item">
        <div className="sidebar-title">Color</div>
        <div className="sidebar-content">
          <div className="colors">
            {allColors.map((color) => (
              <div className="color" key={color}>
                <input 
                  type="checkbox" 
                  className="color-checkbox" 
                  id={color} 
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
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
          <Button onClick={handleApplyFilter}>Apply Filter</Button>
          <div className="vertical-line"></div>
        </div>
      </div>

      {/* Reviewed Products */}
      <div className="sidebar-item">
        <div className="sidebar-title">Reviewed by you</div>
        <div className="sidebar-content">
          <div className="reviewed-products">
            {reviewedProducts.map((product) => (
              <div className="product" key={product.id}>
                <div className="image" style={{ backgroundImage: `url(${product.image})` }}></div>
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