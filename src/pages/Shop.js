import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useCart } from '../pages/CartContext';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator
  const { addToCart } = useCart();

  const categories = {
    men: ['mens-shirts', 'mens-shoes', 'mens-watches'],
    women: ['womens-dresses', 'womens-shoes', 'womens-watches', 'womens-bags', 'womens-jewellery'],
    kids: ['tops'], // Assuming 'tops' are for kids in this context
    accessories: ['sunglasses', 'fragrances', 'skincare']
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Set loading to true before fetching
      try {
        const allProducts = [];
        for (const category of Object.values(categories).flat()) {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await res.json();
          allProducts.push(...data.products);
        }
        console.log('Fetched products:', allProducts); // Log products to console
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error fetching products
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} added to cart!👍🛒`);
    setTimeout(() => {
      setNotification('');
    }, 3000); 
  };

  const renderImage = (product) => {
    if (product.thumbnail) {
      return <img src={product.thumbnail} alt={product.title} className="w-[238px] h-[427px] object-contain mt-[-120px]  border-b-2 border-black" />;
    } else if (product.image) {
      return <img src={product.image} alt={product.title} className="w-[238px] h-[427px] object-contain  border-b-2 border-black" />;
    } else {
      return <div>No Image Available</div>;
    }
  };

  const renderProducts = (categoryKeys) => {
    const categorySet = new Set(categoryKeys);
    return products
      .filter(product => categorySet.has(product.category))
      .slice(0, 6)
      .map(product => (
        <div key={product.id} className="hover:scale-105 transition-all text-left lg:w-[268px] md:w-[238px] w-[328px] h-[500px]  border-2 px-4 rounded-lg flex flex-col items-center justify-center drop-shadow-lg gap-4">
          <Link to={`/products/${product.id}`}> {/* Updated Link to navigate to product detail page */}
            {renderImage(product)}
          </Link>
          <h2 className="text-[16px] font-bold mt-[-80px]">{product.title}</h2>
          <p className="text-[14px] font-bold text-left text-[#23856D]">${product.price}</p>
          <div className="flex gap-2">
            <div className="h-[16px] w-[16px] bg-[#23A6F0] rounded-full"></div>
            <div className="h-[16px] w-[16px] bg-[#23856D] rounded-full"></div>
            <div className="h-[16px] w-[16px] bg-[#E77C40] rounded-full"></div>
            <div className="h-[16px] w-[16px] bg-[#252B42] rounded-full"></div>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ));
  };

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
        <div>
          <div className="grid gap-[20px] text-center mb-8">
            <h1 className="text-[14px] font-normal text-[#737373]">Featured Products</h1>
            <h1 className="text-[24px] font-bold text-[#252B42]">BESTSELLER PRODUCTS</h1>
            <h1 className="text-[14px] font-normal text-[#737373]">Problems trying to resolve the conflict between</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-0 gap-[20px] lg:ml-[100px] md:ml-[80px] ml-[20px] lg:px-[50px]">
            <div>
              <section className="mb-8">
                <h2 className="text-4xl font-bold mb-4 underline underline-offset-4">Men &#8594;</h2>
                <div className="product-list grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {renderProducts(categories.men)}
                </div>
              </section>
              <section className="mb-8">
                <h2 className="text-4xl font-bold mb-4 underline underline-offset-4">Kids &#8594;</h2>
                <div className="product-list grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {renderProducts(categories.kids)}
                </div>
              </section>
            </div>
            <div>
              <section className="mb-8">
                <h2 className="text-4xl font-bold mb-4 underline underline-offset-4">Women &#8594;</h2>
                <div className="product-list grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {renderProducts(categories.women)}
                </div>
              </section>
              <section className="mb-8">
                <h2 className="text-4xl font-bold mb-4 underline underline-offset-4">Accessories &#8594;</h2>
                <div className="product-list grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {renderProducts(categories.accessories)}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
