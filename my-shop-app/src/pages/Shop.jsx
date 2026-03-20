import React from 'react';
import Header from '../components/layout/Header';
import ShopHeader from '../components/shop/ShopHeader';
import Sidebar from '../components/shop/Sidebar';
import ProductList from '../components/shop/ProductList';
import Pagination from '../components/shop/Pagination';
import Subscribe from '../components/layout/Subscribe';
import Footer from '../components/layout/Footer';
import '../styles/shop.css';

const Shop = () => {
  return (
    <>
      <Header />
      <ShopHeader />
      <div className="container">
        <div className="shop">
          <Sidebar />
          <div className="products-wrapper">
            <div className="sort-and-count">
              <div className="products-count">
                There are <b>67</b> products in this category
              </div>
              <div className="sort">
                <select className="input">
                  <option value="Relevance">Relevance</option>
                  <option value="ASC">ASC</option>
                  <option value="DESC">DESC</option>
                </select>
              </div>
            </div>
            <ProductList />
            <Pagination />
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Shop;