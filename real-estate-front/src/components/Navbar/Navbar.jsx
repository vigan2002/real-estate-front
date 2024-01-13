import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth <= 768 && toggleBtn) {
        setToggleBtn(false);
        document.body.classList.remove('scroll-y');
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, [toggleBtn]);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setToggleBtn(!toggleBtn);
      document.body.classList.toggle('scroll-y');
      if (!toggleBtn) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  };

  const closeMenu = () => {
    if (window.innerWidth <= 768 && toggleBtn) {
      setToggleBtn(false);
      document.body.classList.remove('scroll-y');
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <img src={logo} alt="" />
        <ul className={`${toggleBtn ? 'mobile-menu' : ''} menu`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/flats" onClick={closeMenu}>
              Flat
            </NavLink>
          </li>
          <li>
            <NavLink to="/house" onClick={closeMenu}>
              House
            </NavLink>
          </li>
          <li>
            <NavLink to="/office" onClick={closeMenu}>
              Office
            </NavLink>
          </li>
          <li>
            <NavLink to="/land" onClick={closeMenu}>
              Land
            </NavLink>
          </li>
        </ul>
        <button className={`btn-menu ${toggleBtn ? 'close-menu' : ''}`} onClick={toggleMenu}>
          {toggleBtn ? <IoClose /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
