import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { name: 'Textured tyrleneck with zip', price: 53.99, oldPrice: 52.99, label: 'Sale' },
    { name: 'Spray wrap skirt', price: 35.99 },
    { name: 'Short shorts with straps', price: 20.99 },
    { name: 'Fashionee - catton shirt', price: 110.99 },
    { name: 'Warm casual sweater', price: 80.99, oldPrice: 52.99, label: 'New' },
    { name: 'Retro style handbag', price: 45.99, oldPrice: 52.99, label: 'Sale' },
    { name: 'Style Handbag', price: 180.99 },
    { name: 'Blouse with insert and ruffles', price: 30.99, label: 'New' },
    { name: 'Long oversized T-shirt', price: 30.99, label: 'Sale' },
    { name: 'Stylish and comfortable cap', price: 40.99 },
    { name: 'Shoulder bag', price: 210.99, label: 'New' },
    { name: 'High-heeled shoes', price: 70.99, oldPrice: 52.99, label: 'Sale' }
  ];

  return (
    <div className="products">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;