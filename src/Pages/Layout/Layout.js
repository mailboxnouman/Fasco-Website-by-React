import { Outlet, Link, useLocation } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import '../Layout/layout.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import user from '../../assets/user.png';
import favourite from '../../assets/favourite.png';
import cart from '../../assets/cart.png';

const Layout = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const menuRef = useRef(null);
  const delayRef = useRef(null); // Ref to store the delay timer

  const location = useLocation();
  const isSignInOrSignUpPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/forget';
  const isHomePage = location.pathname === '/';
  const isShopPage = location.pathname === '/shop';

  const menuClass = isSignInOrSignUpPage ? 'hidden' : '';
  const homeClass = isSignInOrSignUpPage ? 'homeClass' : '';
  const activeClass = isHomePage ? 'activeClass' : '';
  const shopList = isShopPage ? '' : 'hidden';
  const activeShop = isShopPage ? 'activeClass' : '';
  const menuClassShop = isShopPage ? 'hidden' : '';

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHideMenu(true); // Set hideMenu state to true immediately
        delayRef.current = setTimeout(() => {
          setToggleMenu(false);
          setHideMenu(false); // Reset hideMenu state after 0.4 seconds
        }, 400);
      }
    };

    if (toggleMenu) {
      document.addEventListener('mousedown', handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
      clearTimeout(delayRef.current); // Clear the delay timer on unmount
    };
  }, [toggleMenu]);

  const Menu = () => {
    const handleMenuLinkClick = () => {
      setToggleMenu(false);
    };

    return (
      <ul>
        <li className={`${activeClass}`}>
          <Link aria-current="page" to="/" onClick={handleMenuLinkClick}>Home</Link>
        </li>
        <li className={`${menuClass + menuClassShop}`}>
          <Link to="#deals" onClick={handleMenuLinkClick}>Deals</Link>
        </li>
        <li className={`${menuClass + menuClassShop}`}>
          <Link to="#newArrival" onClick={handleMenuLinkClick}>New Arrivals</Link>
        </li>
        <li className={`${menuClass + menuClassShop}`}>
          <Link to="#packages" onClick={handleMenuLinkClick}>Packages</Link>
        </li>
        <li className={`${shopList + activeShop} `}>
          <Link to="/shop" onClick={handleMenuLinkClick}>Shop</Link>
        </li>
        <li className={`${shopList}`}>
          <Link to="/products" onClick={handleMenuLinkClick}>Products</Link>
        </li>
        <li className={`${shopList}`}>
          <Link to="/pages" onClick={handleMenuLinkClick}>Pages</Link>
        </li>
      </ul>
    );
  };

  const handleToggleMenu = () => {
    if (toggleMenu) {
      setHideMenu(true);
      clearTimeout(delayRef.current); // Clear any existing delay timer
      delayRef.current = setTimeout(() => {
        setToggleMenu(false);
        setHideMenu(false);
      }, 400);
    } else {
      setToggleMenu(true);
    }
  };

  return (
    <>
      <div className='navbar'>
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <Link aria-current="page" to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
          <div className={`navbar-icons_container ${shopList}`}>
            <div className="navbar-search-icon">
              <img src={search} alt="" />
            </div>
            <div className="navbar-profile-icon">
              <img src={user} alt="" />
            </div>
            <div className="navbar-favourite-icon">
              <img src={favourite} alt="" />
            </div>
            <div className="navbar-cart-icon">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
        <li className={`navbar-sign signin ${menuClass + menuClassShop}`}>
          <Link to="signin">Sign in</Link>
        </li>
        <li className={`signup navbar-sign ${menuClass + menuClassShop}`}>
          <Link to="signup">Sign up</Link>
        </li>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color='#484848' size={40} onClick={handleToggleMenu} />
            : <RiMenu3Line color='#484848' size={40} onClick={handleToggleMenu} />
          }
          {toggleMenu && (
            <div ref={menuRef} className={`navbar-menu_container ${hideMenu ? 'scale-down-center' : 'scale-up-center'}`}>
              <div className={`navbar-menu_container-links ${homeClass}`}>
                <Menu />
                <div className="navbar-menu_container-links-sign">
                  <li className={`signin ${menuClass + menuClassShop}`}>
                    <Link to="signin">Sign in</Link>
                  </li>
                  <li className={`signup ${menuClass + menuClassShop}`}>
                    <Link to="signup">Sign up</Link>
                  </li>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
