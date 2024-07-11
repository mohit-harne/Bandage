import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../pages/CartContext';

const Bestseller = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json.slice(0, 8));
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} added to cart!👍🛒`);
    setTimeout(() => {
      setNotification('');
    }, 3000); 
  };

  return (
    <div className='lg:mt-[40px] md:mt-[0px] mt-[300px] relative'>
      <div className='grid gap-[20px] text-center'>
        <h1 className='text-[14px] font-normal text-[#737373]'>Featured Products</h1>
        <h1 className='text-[24px] font-bold text-[#252B42]'>BESTSELLER PRODUCTS</h1>
        <h1 className='text-[14px] font-normal text-[#737373]'>Problems trying to resolve the conflict between</h1>
      </div>
      {notification && (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#333333] lg:text-4xl md:text-4xl text-2xl text-white text-center p-4 rounded-lg mb-4 z-50'>
          {notification}
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:gap-[30px] md:gap-[80px] gap-[30px] mt-6 lg:scale-100 md:scale-[80%] scale-100 items-start justify-start lg:ml-0 md:ml-[-70px] ml-0 lg:mt-[80px] md:mt-[-100px]'>
        {products.map(product => (
          <div key={product.id} className='hover:scale-105 transition-all text-left lg:w-[238px] md:w-[238px] w-[328px] h-[715px] border-2 px-4 rounded-lg flex flex-col items-center justify-start drop-shadow-lg gap-4'>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className='w-[238px] h-[427px] object-contain mb-2 border-b-2 border-black' />
            </Link>
            <h2 className='text-[16px] font-bold'>{product.title}</h2>
            <p className='text-[14px] font-bold text-left text-[#23856D]'>${product.price}</p>
            <div className='flex gap-2'>
              <div className='h-[16px] w-[16px] bg-[#23A6F0] rounded-full'></div>
              <div className='h-[16px] w-[16px] bg-[#23856D] rounded-full'></div>
              <div className='h-[16px] w-[16px] bg-[#E77C40] rounded-full'></div>
              <div className='h-[16px] w-[16px] bg-[#252B42] rounded-full'></div>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
