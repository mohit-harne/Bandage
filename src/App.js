import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing';
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './pages/CartContext';
import ScrollToTop from './components/ScrollToTop';
import ProductDetail2 from './pages/ProductDetail2';

function App() {
  return (
    <CartProvider>
    <Router>
    <ScrollToTop />
        <div className='overflow-x-hidden'>
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetail/>} />
            <Route path="/products/:id" element={<ProductDetail2/>} />
          </Routes>
        </div>
        <Footer/>
    </Router>
    </CartProvider>
  );
}

export default App;
