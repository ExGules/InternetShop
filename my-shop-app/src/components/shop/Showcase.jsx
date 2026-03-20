import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import Pagination from './Pagination';
import Subscribe from '../layout/Subscribe';
import productsData from '../../assets/data/products.json';

const Showcase = ({ favorites, onAddToFavorites, onAddToCart }) => {
  const [filters, setFilters] = useState({ category: null, colors: [], price: { min: '', max: '' } });
  
  const allProducts = productsData.products || productsData;
  
  // Фильтрация товаров
  const filteredProducts = allProducts.filter(product => {
    // Фильтр по категории
    if (filters.category && !product.categories.includes(filters.category)) {
      return false;
    }
    
    // Фильтр по цвету
    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
      return false;
    }
    
    // Фильтр по цене
    if (filters.price.min && product.price < Number(filters.price.min)) {
      return false;
    }
    if (filters.price.max && product.price > Number(filters.price.max)) {
      return false;
    }
    
    return true;
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div className="container">
        <div className="shop">
          <Sidebar onFilterChange={handleFilterChange} />
          <div className="products-wrapper">
            <div className="sort-and-count">
              <div className="products-count">
                There are <b>{filteredProducts.length}</b> products in this category
              </div>
              <div className="sort">
                <select className="input">
                  <option value="Relevance">Relevance</option>
                  <option value="ASC">ASC</option>
                  <option value="DESC">DESC</option>
                </select>
              </div>
            </div>
            <ProductList 
              products={filteredProducts}
              favorites={favorites}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />
            <Pagination />
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Showcase;