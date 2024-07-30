import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 p-4 text-white">
    <nav className="flex justify-between">
      <div className="text-lg font-bold">PMU Artist</div>
      <div>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/portfolio" className="px-2">Portfolio</Link>
        <Link to="/services" className="px-2">Services</Link>
        <Link to="/contact" className="px-2">Contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;
