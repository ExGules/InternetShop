import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import ContentBlock from './components/layout/ContentBlock';
import Footer from './components/layout/Footer';
import Showcase from './components/shop/Showcase';
import Cart from './components/cart/Cart';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Shop');
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    const savedCart = localStorage.getItem('cart');
    if (savedFavorites) try { setFavorites(JSON.parse(savedFavorites)); } catch (e) {}
    if (savedCart) try { setCartItems(JSON.parse(savedCart)); } catch (e) {}
  }, []);

  useEffect(() => localStorage.setItem('favorites', JSON.stringify(favorites)), [favorites]);
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cartItems)), [cartItems]);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleCartClick = () => setCurrentPage('Cart');
  const handleAddToFavorites = (product) => setFavorites(prev => prev.some(item => item.id === product.id) ? prev.filter(item => item.id !== product.id) : [...prev, { ...product }]);
  const handleAddToCart = (product, quantity = 1) => setCartItems(prev => {
    const existing = prev.find(item => item.id === product.id);
    return existing ? prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) : [...prev, { ...product, quantity }];
  });
  const handleUpdateCartQuantity = (productId, newQuantity) => setCartItems(prev => newQuantity <= 0 ? prev.filter(item => item.id !== productId) : prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  const handleRemoveFromCart = (productId) => setCartItems(prev => prev.filter(item => item.id !== productId));

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header onCartClick={handleCartClick} favoriteCount={favorites.length} cartCount={cartTotalCount} />
      <ContentBlock title={currentPage} onTitleClick={handlePageChange} />
      {currentPage === 'Shop' ? (
        <Showcase favorites={favorites} onAddToFavorites={handleAddToFavorites} onAddToCart={handleAddToCart} />
      ) : (
        <Cart cartItems={cartItems} onUpdateQuantity={handleUpdateCartQuantity} onRemoveItem={handleRemoveFromCart} onAddToFavorites={handleAddToFavorites} favorites={favorites} />
      )}
      <Footer />
    </>
  );
}
