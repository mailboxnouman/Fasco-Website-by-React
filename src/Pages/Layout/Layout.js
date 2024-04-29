import { Outlet, Link,  useLocation } from "react-router-dom";
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import '../Layout/layout.css'
import logo from '../../assets/logo.png'



const Layout = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const location = useLocation();
  const isSignInOrSignUpPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/forget';

  const menuClass = isSignInOrSignUpPage ? 'hidden' : '';
  const homeClass = isSignInOrSignUpPage ? 'homeClass' : '';

  const Menu = () => (

    <ul>
      <li >
        <Link aria-current="page" to="/">Home</Link>
      </li>
      <li className={` ${menuClass}`}>
        <Link to="#deals">Deals</Link>
      </li>
      <li className={` ${menuClass}`}>
        <Link to="#newArrival">New Arrivals</Link>
      </li>
      <li  className={` ${menuClass}`}>
        <Link to="#packages">Packages</Link>
      </li>
  
  
    </ul>
  
  )

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
        </div>
       
        <li className={`navbar-sign signin ${menuClass}`}>
          <Link to="signin">Sign in</Link>
        </li>
        <li  className={`signup navbar-sign ${menuClass}`}>
          <Link to="signup">Sign up</Link>
        </li>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color='#484848' size={40} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#484848' size={40} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='navbar-menu_container scale-up-center'>
              <div className={`navbar-menu_container-links ${homeClass}`}>
                <Menu />
                <div className="navbar-menu_container-links-sign">
                <li className={`signin ${menuClass}`}>
          <Link to="signin">Sign in</Link>
        </li>
        <li className={`signup ${menuClass}`}>
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
  )
}

export default Layout