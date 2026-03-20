import './styles/reset.css';
import './styles/commons.css';
import './styles/header.css'
import './styles/footer.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

export default function App() {
    return (
        <Router>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}