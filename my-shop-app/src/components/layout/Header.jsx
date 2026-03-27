import React from 'react';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/icons/logo.svg';
import arrow from '../../assets/icons/arrow.svg';
import arrowPink from '../../assets/icons/arrow-pink.svg';
import search from '../../assets/icons/search.svg';
import profile from '../../assets/icons/profile.svg';
import favorite from '../../assets/icons/favorite.svg';
import cart from '../../assets/icons/cart.svg';

const Header = ({ onCartClick, favoriteCount = 0, cartCount = 0 }) => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <header className="header">
      <div className="left-side">
        <div className="logo-container">
          <div className="burger-menu">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
            <label className="burger" htmlFor="burger-checkbox"></label>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="menu">
          <div className="menu-item">
            <span>Home</span>
          </div>
          <div className="menu-item">
            <span>Pages</span>
            <img src={arrow} alt="arrow" className="arrow-default" />
            <img src={arrowPink} alt="arrow" className="arrow-hover" />
          </div>
          <div className="menu-item active">
            <span>Shop</span>
            <img src={arrow} alt="arrow" className="arrow-default" />
            <img src={arrowPink} alt="arrow" className="arrow-hover" />
          </div>
          <div className="menu-item">
            <span>Blog</span>
          </div>
          <div className="menu-item">
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="header-icon">
          <img src={search} alt="search" />
        </div>
        
        {/* Профиль/Авторизация */}
        <div className="header-icon profile-container">
          <img src={profile} alt="profile" />
          {isLoggedIn ? (
            <>
              <div className="online-status"></div>
              <div className="auth-status logged-in">
                <button onClick={logout} className="logout-btn-small">Выйти</button>
              </div>
            </>
          ) : (
            <button onClick={login} className="login-btn-small">Войти</button>
          )}
        </div>
        
        <div className="header-icon">
          <img src={favorite} alt="favorite" />
          {favoriteCount > 0 && <div className="counter">{favoriteCount}</div>}
        </div>
        <div className="header-icon" onClick={onCartClick} style={{ cursor: 'pointer' }}>
          <img src={cart} alt="cart" />
          {cartCount > 0 && <div className="counter">{cartCount}</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;