import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './LoginModal.css'; // если есть стили

const LoginModal = ({ onClose }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь может быть реальная логика авторизации
    login({ email, name: email.split('@')[0] });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Вход в аккаунт</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Войти</button>
          <button type="button" onClick={onClose}>Отмена</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;