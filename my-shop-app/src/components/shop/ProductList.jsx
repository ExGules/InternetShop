import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, favorites, onAddToFavorites, onAddToCart }) => {
  if (!products || products.length === 0) {
    return <div className="no-products">No products found</div>;
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
          isFavorite={favorites.some(fav => fav.id === product.id)}
          onAddToFavorites={() => onAddToFavorites(product)}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;