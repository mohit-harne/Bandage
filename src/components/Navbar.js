import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import loginlogo from '../images/loginlogo.png';
import searchicon from '../images/searchicon.png';
import carticon from '../images/carticon.png';
import favicon from '../images/favicon.png';
import insta from '../images/insta.png';
import utube from '../images/utube.png';
import fb from '../images/fb.png';
import tweet from '../images/tweet.png';
import call from '../images/call.png';
import mail from '../images/mail.png';
import { useCart } from '../pages/CartContext'; // Import useCart hook from CartContext

const Navbar = () => {
  const location = useLocation();
  const { cart } = useCart(); // Access cart state from CartContext
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTopDiv, setShowTopDiv] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);

      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowTopDiv(false);
      } else {
        // Scrolling up
        setShowTopDiv(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      <div className={`lg:block hidden w-full h-[58px] text-white bg-[#252B42] ${showTopDiv ? 'block' : 'hidden'} ${isSticky ? 'fixed top-0 opacity-0' : ''}`}>
        <div className='grid grid-flow-col items-center pt-[15px]'>
          <div className='flex justify-start gap-[20px] ml-[20px]'>
            <a href='https://www.linkedin.com/in/mohit-h-8a48ab9b/'> <h1 className='text-[14px] font-bold'><span><img className='h-[16px] w-[16px] inline-block' src={call} alt='M'/></span> &nbsp;(225) 555-0118</h1></a>
            <a href='https://www.linkedin.com/in/mohit-h-8a48ab9b/'><h1 className='text-[14px] font-bold'><span><img className='h-[16px] w-[16px] inline-block' src={mail} alt='M'/></span> &nbsp;michelle.rivera@example.com</h1></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/mohit-h-8a48ab9b/'> <h1 className='justify-center ml-[250px] text-[14px] font-bold'>Follow Us and get a chance to win 80% off</h1></a>
          </div>
          <div className='flex ml-[300px]'>
            <h1 className='justify-end text-[14px] font-bold'>Follow Us &nbsp; : </h1>
            <div className='grid grid-flow-col items-center ml-[20px] gap-[15px]'>
              <a href='https://www.linkedin.com/in/mohit-h-8a48ab9b/'> <img className='h-[16px] w-[16px]' src={insta} alt='M'/></a>
              <a href='https://www.linkedin.com/in/mohit-h-8a48ab9b/'>  <img className='h-[16px] w-[16px]' src={utube} alt='M'/></a>
              <a href='https://www.linkedin.com/in/mohit-h-8a48ab9b/'> <img className='h-[16px] w-[16px]' src={fb} alt='M'/></a>
              <a href='https://www.linkedin.com/in/mohit-h-8a48ab9b/'> <img className='h-[16px] w-[16px]' src={tweet} alt='M'/></a>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full bg-white z-50 ${isSticky ? `fixed ${showTopDiv ? 'top-[58px] lg:top-[58px]' : 'top-0 lg:top-0'} bg-opacity-75` : 'sticky top-0 lg:top-[58px]'}`}>
        <nav className="container mx-auto h-20 flex justify-between lg:justify-normal lg:gap-[160px] md:justify-between items-center lg:px-[0px] px-[20px]">
          <Link to="/" className="text-[24px] text-[#252B42] font-bold lg:ml-[20px]">Bandage</Link>
          <div className="hidden lg:flex grid-flow-col items-center gap-[24px]">
            <CustomNavLink to="/" active={location.pathname === "/"} onClick={closeMenu}><h1 className='text-[14px] text-[#737373] font-bold'>Home</h1></CustomNavLink>
            <CustomNavLink to="/shop" active={location.pathname === "/shop"} onClick={closeMenu}><h1 className='text-[14px] text-[#737373] font-bold'>Shop</h1></CustomNavLink>
            <CustomNavLink to="/about" active={location.pathname === "/about"} onClick={closeMenu}><h1 className='text-[14px] text-[#737373] font-bold'>About</h1></CustomNavLink>
            <CustomNavLink to="/blog" active={location.pathname === "/blog"} onClick={closeMenu}><h1 className='text-[14px] text-[#737373] font-bold'>Blog</h1></CustomNavLink>
            <CustomNavLink to="/contact" active={location.pathname === "/contact"} onClick={closeMenu}><h1 className='text-[14px] text-[#737373] font-bold'>Contact</h1></CustomNavLink>
            <CustomNavLink to="/pricing" active={location.pathname === "/pricing"} onClick={closeMenu}><h1 className='text-[14px] text-[#737373] font-bold'>Pricing</h1></CustomNavLink>
            <div className='flex gap-[5px] ml-[550px]'>
              <a href="mailto:info@lettercrafts.org" className=" text-white text-[14px] font-medium py-[8px] px-[16px]">
                <div className='flex justify-center items-center gap-[4px] text-[#23A6F0] text-[14px] font-bold'>
                  <img className='h-[12px] w-[12px]' src={loginlogo} alt='M'/> Login&nbsp;/&nbsp;Register
                </div>
              </a>
              <a href="tel:+6567110135" className=" text-white text-[14px] font-medium py-[8px] px-[16px] ">
                <div className='flex justify-center items-center gap-[4px]'>
                  <img className='h-[16px] w-[16px]' src={searchicon} alt='Search'/>
                </div>
              </a>
              <a href="/cart" className=" text-white text-[14px] font-medium py-[8px] px-[16px] relative">
                <div className='flex justify-center items-center gap-[4px]'>
                  <img className='h-[16px] w-[16px]' src={carticon} alt='Cart'/>
                  {cart.length > 0 && (
                    <span className="bg-red-500 text-white rounded-full w-[18px] h-[18px] flex items-center justify-center absolute -top-1 -right-1">
                      {cart.length}
                    </span>
                  )}
                </div>
              </a>
              <a href="/favorites" className=" text-white text-[14px] font-medium py-[8px] px-[16px] ">
                <div className='flex justify-center items-center gap-[4px]'>
                  <img className='h-[16px] w-[16px]' src={favicon} alt='Favorites'/>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:hidden flex items-center gap-4">
            <a href="/cart" className="relative">
              <img className='h-[24px] w-[24px]' src={carticon} alt='Cart'/>
              {cart.length > 0 && (
                <span className="bg-red-500 text-white rounded-full w-[18px] h-[18px] flex items-center justify-center absolute -top-1 -right-1">
                  {cart.length}
                </span>
              )}
            </a>
            <button onClick={toggleMenu} className="text-[24px] text-black focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="lg:hidden mt-2 px-4 transition-all duration-300000 ease-out fade">
            <ul className="flex flex-col gap-4 items-center">
              <li>
                <CustomNavLink to="/" active={location.pathname === "/"} onClick={closeMenu}><h1 className='text-[24px] text-black font-bold'>Home</h1></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/shop" active={location.pathname === "/shop"} onClick={closeMenu}><h1 className='text-[24px] text-black font-bold'>Shop</h1></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/about" active={location.pathname === "/about"} onClick={closeMenu}><h1 className='text-[24px] text-black font-bold'>About</h1></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/blog" active={location.pathname === "/blog"} onClick={closeMenu}><h1 className='text-[24px] text-black font-bold'>Blog</h1></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/contact" active={location.pathname === "/contact"} onClick={closeMenu}><h1 className='text-[24px] text-black font-bold'>Contact</h1></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/pricing" active={location.pathname === "/pricing"} onClick={closeMenu}><h1 className='text-[24px] text-black font-bold'>Pricing</h1></CustomNavLink>
              </li>
              <li>
                <a href="tel:+6567110135" className=" text-black text-[24px] font-bold py-[8px] px-[16px] flex items-center">
                  <img className='h-[26px] w-[26px] mr-[8px]' src={searchicon} alt='Search'/> Search
                </a>
              </li>
              <li>
                <a href="/favorites" className=" text-black text-[24px] font-bold py-[8px] px-[16px] flex items-center">
                  <img className='h-[26px] w-[26px] mr-[8px]' src={favicon} alt='Favorites'/> Favorites
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomNavLink = ({ to, active, children, ...props }) => (
  <NavLink to={to} {...props}>
    {React.cloneElement(children, { className: `${children.props.className} ${active ? 'text-[#23A6F0]' : ''}` })}
  </NavLink>
);

export default Navbar;
