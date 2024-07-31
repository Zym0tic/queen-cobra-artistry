import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import queenCobraLogo from '../images/logo/queencobralogo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-header">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={queenCobraLogo} className="h-[100px] md:h-[150px]" alt="Queen Cobra Logo" />
        </a>
        <button 
          onClick={toggleMenu} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-accent rounded-lg md:hidden focus:outline-none" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div 
          className={`w-full md:block md:w-auto ${isMenuOpen ? 'open' : ''}`} 
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-header md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-accent2 hover:text-accent focus:text-accent rounded md:bg-transparent md:text-accent2 md:p-0 " aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/home" className="block py-2 px-3 text-accent2 hover:text-accent focus:text-accent  rounded md:p-0 ">About</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 text-accent2 hover:text-accent focus:text-accent  rounded md:p-0 ">Services</Link>
            </li>
            <li>
              <Link to="/portfolio" className="block py-2 px-3 text-accent2 hover:text-accent focus:text-accent  rounded md:p-0 ">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-accent2 hover:text-accent focus:text-accent  md:p-0 ">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
