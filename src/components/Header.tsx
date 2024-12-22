import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Affiliate Marketing</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/car-insurance" className="hover:text-gray-400">Car Insurance</Link>
            </li>
            <li>
              <Link to="/health-insurance" className="hover:text-gray-400">Health Insurance</Link>
            </li>
            <li>
              <Link to="/funeral-cover" className="hover:text-gray-400">Funeral Cover</Link>
            </li>
            <li>
              <Link to="/cellphone-deals" className="hover:text-gray-400">Cellphone Deals</Link>
            </li>
            <li>
              <Link to="/data-plans" className="hover:text-gray-400">Data Plans</Link>
            </li>
            <li>
              <Link to="/wifi-fiber-lte" className="hover:text-gray-400">Wi-Fi Fiber & LTE</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;