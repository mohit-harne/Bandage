import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Bestseller from '../components/Bestseller';
import rating from '../images/rating.png';
import cartround from '../images/cartround.png';
import favround from '../images/favround.png';
import eyeround from '../images/eyeround.png';
import pd1 from '../images/pd1.png';
import hooli from '../images/hooli.png';
import lyft from '../images/lyft.png';
import boat from '../images/boat.png';
import stripe from '../images/stripe.png';
import aws from '../images/aws.png';
import reddit from '../images/reddit.png';
import { useCart } from '../pages/CartContext';

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { productId } = useParams(); // Ensure correct parameter name
  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setIsLoading(false); // Update loading state once data is fetched
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} added to cart! 👍🛒`);
    setTimeout(() => {
      setNotification('');
    }, 3000); 
  };

  if (!product) {
    return <div className='text-4xl text-center mt-[100px]'>Loading...</div>;
  }

  return (
    <div className="shop-container p-4">
      {notification && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#333333] lg:text-4xl md:text-4xl text-2xl text-white text-center p-4 rounded-lg mb-4 z-50">
          {notification}
        </div>
      )}
      {isLoading ? (
        <div className="text-center text-xl font-bold mt-8">
          Loading products...
        </div>
      ) : (
        <div className='container mx-auto p-4'>
          <Breadcrumbs />
          <div className='items-start flex lg:flex-row md:flex-row flex-col justify-center lg:gap-[140px] md:gap-[40px] gap-[30px]'>
            <div className='flex flex-col gap-[20px]'>
              <img src={product.image} alt={product.title} className='h-[450px] w-[506px] drop-shadow-lg shadow-black border-2 border-gray-500 p-2' />
              <div className='flex gap-[10px]'>
                <img src={product.image} alt={product.title} className='h-[75px] w-[100px] drop-shadow-lg shadow-black border-2 border-gray-500 p-2' />
                <img src={product.image} alt={product.title} className='h-[75px] w-[100px] drop-shadow-lg shadow-black border-2 border-gray-500 p-2' />
              </div>
            </div>
            <div className='flex flex-col gap-[30px] h-[471px] '>
              <div className='leading-[60px]'>
                <h1 className='text-[20px] font-bold text-[#252B42]'>{product.title}</h1>
                <img className='w-[221px] h-[24px]' src={rating} alt='M' />
              </div>
              <div className='leading-[40px]'>
                <p className='text-[24px] text-[#252B42] font-bold'>${product.price}</p>
                <h1 className='text-[14px] text-[#737373] font-bold'>Availability : <span className='text-[#23A6F0]'>In Stock</span></h1>
              </div>
              <p className='text-[14px] text-[#858585] lg:w-[460px] md:w-[350px] w-[360px]'>{product.description}</p>
              <div className='lg:w-[445px] md:w-[350px] w-[350px] border-b-2 border-[#BDBDBD]'></div>
              <div className='flex gap-[10px]'>
                <div className='rounded-full h-[30px] w-[30px] bg-[#23A6F0]'></div>
                <div className='rounded-full h-[30px] w-[30px] bg-[#2DC071]'></div>
                <div className='rounded-full h-[30px] w-[30px] bg-[#E77C40]'></div>
                <div className='rounded-full h-[30px] w-[30px] bg-[#252B42]'></div>
              </div>
              <div className='flex gap-[10px]'>
                <button className='text-[14px] text-white font-bold px-[20px] py-[10px] bg-[#23A6F0] rounded-md'>Select Options</button>
                <img className='h-[40px] w-[40px]' src={favround} alt='M' />
                <button onClick={() => handleAddToCart(product)}><img className='h-[40px] w-[40px]' src={cartround} alt='M' /></button>
                <img className='h-[40px] w-[40px]' src={eyeround} alt='M' />
              </div>
            </div>
          </div>
          <div className='lg:mt-[100px] md:mt-[50px] mt-[60px]'>
            <div className='flex lg:gap-[50px] md:gap-[50px] gap-[20px] justify-center items-center h-[72px]'>
              <h1 className='text-[14px] text-[#737373] font-semibold'>Description</h1>
              <h1 className='text-[14px] text-[#737373] font-bold'>Additional Information</h1>
              <h1 className='text-[14px] text-[#737373] font-bold'>Reviews <span className='text-[#23856D]'>(0)</span></h1>
            </div>
            <div className='flex justify-center'>
              <div className='lg:w-[1049px] md:w-[650px] w-[350px] border-b-2 border-[#BDBDBD] h-[4px] mt-[15px]'></div>
            </div>
            <div className='flex lg:flex-row md:flex-row md:cols-2 flex-col lg:gap-[70px] md:gap-[50px] gap-[20px] justify-center items-center mt-[70px]'>
              <img className='h-[392px] w-[332px]' src={pd1} alt='M' />
              <div className='w-[310px] flex flex-col gap-[30px]'>
                <h1 className='text-[24px] text-[#252B42] font-bold'>the quick fox jumps over </h1>
                <h1 className='text-[14px] text-[#737373] '>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                <h1 className='text-[14px] text-[#737373] '>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                <h1 className='text-[14px] text-[#737373] '>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
              </div>
              <div className='w-[310px] flex flex-col gap-[30px]'>
                <h1 className='text-[24px] text-[#252B42] font-bold'>the quick fox jumps over </h1>
                <h1 className='text-[14px] text-[#737373] font-bold'>&rarr; the quick fox jumps over </h1>
                <h1 className='text-[14px] text-[#737373] font-bold'>&rarr; the quick fox jumps over </h1>
                <h1 className='text-[14px] text-[#737373] font-bold'>&rarr; the quick fox jumps over </h1>
                <h1 className='text-[14px] text-[#737373] font-bold'>&rarr; the quick fox jumps over </h1>
                <h1 className='text-[24px] text-[#252B42] font-bold'>the quick fox jumps over </h1>
                <h1 className='text-[14px] text-[#737373] font-bold'>&rarr; the quick fox jumps over </h1>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center lg:mt-0 md:mt-[50px] mt-[-250px]'><Bestseller /></div>
          <div className='lg:h-[126px] md:h-[126px] h-[1452px] bg-[#FAFAFA] flex lg:flex-row md:flex-row flex-col lg:gap-[50px] md:gap-[0px] gap-[180px] justify-center items-center lg:mt-[60px] md:mt-[-120px] mt-[10px]'>
            <img  className='h-[34px] w-[153px] lg:scale-100 md:scale-100 scale-[200%]' src={hooli} alt='M' />
            <img className='h-[59px] w-[146px] lg:scale-100 md:scale-100 scale-[280%]' src={lyft} alt='M' />
            <img className='h-[75px] w-[152px] lg:scale-100 md:scale-100 scale-[280%]' src={boat} alt='M' />
            <img className='h-[42px] w-[151px] lg:scale-100 md:scale-100 scale-[280%]' src={stripe} alt='M' />
            <img className='h-[62px] w-[151px] lg:scale-100 md:scale-100 scale-[280%]' src={aws} alt='M' />
            <img className='h-[72px] w-[151px] lg:scale-100 md:scale-100 scale-[280%]' src={reddit} alt='M' />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
