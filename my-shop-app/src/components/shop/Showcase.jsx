import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import Pagination from './Pagination';
import Subscribe from '../layout/Subscribe';
import Sort from './Sort';
import productsData from '../../assets/data/products.json';

const Showcase = ({ favorites, onAddToFavorites, onAddToCart }) => {
  const [filters, setFilters] = useState({
    search: '',
    category: null,
    colors: [],
    price: { min: '', max: '' }
  });

  const [sortType, setSortType] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCTS_PER_PAGE = 9;

  const allProducts = productsData.products || productsData;

  const filteredProducts = allProducts.filter(product => {
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.categories?.some(cat =>
          cat.toLowerCase().includes(query)
        );

      if (!matchesSearch) return false;
    }

    if (filters.category &&
      !product.categories.includes(filters.category)) {
      return false;
    }

    if (filters.colors.length > 0 &&
      !filters.colors.includes(product.color)) {
      return false;
    }

    if (filters.price.min &&
      product.price < Number(filters.price.min)) {
      return false;
    }

    if (filters.price.max &&
      product.price > Number(filters.price.max)) {
      return false;
    }

    return true;
  });

  // SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case "name":
        return a.name.localeCompare(b.name);

      case "price_asc":
        return a.price - b.price;

      case "price_desc":
        return b.price - a.price;

      default:
        return 0;
    }
  });

  // PAGINATION
  const totalPages = Math.ceil(
    sortedProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="container">
        <div className="shop">
          <Sidebar onFilterChange={handleFilterChange} />

          <div className="products-wrapper">
            <div className="sort-and-count">
              <div className="products-count">
                There are <b>{sortedProducts.length}</b> products
              </div>

              <Sort
  value={sortType}
  onChange={(value) => {
    setSortType(value);
    setCurrentPage(1);
  }}
/>
            </div>

            <ProductList
              products={paginatedProducts}
              favorites={favorites}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <Subscribe />
    </>
  );
};

export default Showcase;