import { useState, useEffect } from 'react';
import './styles/reset.css';
import './styles/commons.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/shop.css';
import './styles/card.css';

import Header from './components/layout/Header';
import ContentBlock from './components/layout/ContentBlock';
import Footer from './components/layout/Footer';
import Showcase from './components/shop/Showcase';
import Cart from './components/cart/Cart';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Shop');
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Загрузка из localStorage при инициализации
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    const savedCart = localStorage.getItem('cart');
    
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error('Error loading favorites:', e);
      }
    }
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Сохранение в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handlePageChange = (page) => {
    console.log('Changing page to:', page); // Для отладки
    setCurrentPage(page);
  };

  const handleCartClick = () => {
    console.log('Cart icon clicked'); // Для отладки
    setCurrentPage('Cart');
  };

  const handleAddToFavorites = (product) => {
    setFavorites(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, { ...product }];
      }
    });
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const handleUpdateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== productId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Вычисляем общее количество товаров в корзине
  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header 
        onCartClick={handleCartClick}
        favoriteCount={favorites.length}
        cartCount={cartTotalCount}
      />
      <ContentBlock 
        title={currentPage} 
        onTitleClick={handlePageChange}
      />
      
      {currentPage === 'Shop' ? (
        <Showcase 
          favorites={favorites}
          onAddToFavorites={handleAddToFavorites}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <Cart 
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveFromCart}
          onAddToFavorites={handleAddToFavorites}
          favorites={favorites}
        />
      )}
      
      <Footer />
    </>
  );
}
const handleAddToCart = (product, quantity = 1) => {
  setCartItems(prev => {
    const existingItem = prev.find(item => item.id === product.id);
    const cartProduct = {
      id: product.id,
      name: product.name,
      currentPrice: product.price,
      oldPrice: product.oldPrice,
      image: product.image,
      quantity: quantity
    };
    
    if (existingItem) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      return [...prev, cartProduct];
    }
  });
};