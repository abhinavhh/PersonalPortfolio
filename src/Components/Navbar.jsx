import React, { useState } from 'react';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onScrollclick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="">
      <nav className="flex items-center justify-between">
        {/* Logo + Menu Toggle */}
        <h1 className="text-xl font-bold">Abhinav</h1>
        <div className="flex items-center space-x-2 md:hidden">
          {/* Use IconButton for better hit area and accessibility */}
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu" 
            size="large"
            color='secondary'
          >
            <DehazeOutlinedIcon fontSize="inherit" />
          </IconButton>
          
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {['about','projects','education','contact'].map((sec) => (
            <li
              key={sec}
              onClick={() => onScrollclick(sec)}
              className="cursor-pointer hover:text-blue-600"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute left-80 right-0 top-0 pt-10 flex flex-col border-2 border-b-fuchsia-950 bg-black md:hidden px-5 pb-4 shadow-md space-y-3">
          {['about','projects','education','contact'].map((sec) => (
            <li
              key={sec}
              onClick={() => onScrollclick(sec)}
              className="cursor-pointer hover:text-blue-600"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Navbar;
