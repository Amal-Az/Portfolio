import React from 'react';
import { NavLink } from 'react-router-dom';
import portfolio1 from '../assets/portfolio1.png';
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D0B3C] z-50 shadow-md">
      <nav className="flex justify-between items-center px-8 py max-w-7xl mx-auto">
        <div className="w-20 h-20">
  <img src={portfolio1} alt="Logo" className="w-full h-full object-contain scale-125" />
</div>

        <ul className="flex gap-10 ml-20">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/projects', label: 'Projects' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
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
      </nav>
    </header>
  );
}
