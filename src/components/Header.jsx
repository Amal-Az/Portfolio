import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import amalAz from '../assets/amalAz.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D0B3C] z-50 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
        {/* Logo */}
        <div className="w-16 h-16">
          <img src={amalAz} alt="Logo" className="w-full h-full object-contain scale-125" />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 ml-20">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="relative px-4 py-2 rounded-md text-white transition-all duration-300 hover:text-red-500 hover:shadow-[0_0_25px_10px_rgba(255,0,0,0.6)]"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon - mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu drawer */}
        <div className={`fixed top-0 right-0 h-full w-3/4 backdrop-blur-md bg-[#0D0B3C]/70 z-40 transform transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
>
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="text-white">
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-6 pl-6 text-white text-lg transition-opacity duration-500 ease-in-out">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className="block py-2 hover:text-red-500 transition-all"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay to close menu when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={closeMenu}
          ></div>
        )}
      </nav>
    </header>
  );
}
