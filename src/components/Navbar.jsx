import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import myImage from "../assets/me.png";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/olalekan-bamigboye-resume.pdf';
    window.open(resumeUrl, "_blank");
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isMobile = false) => (
    <ul className={`list-none ${isMobile ? 'flex flex-col gap-4' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isMobile ? 'text-secondary' : 'text-white'
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isMobile) setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-${isMobile ? 'secondary' : 'white'} hover:text-white text-[18px] font-medium cursor-pointer`}
      >
        <button onClick={() => {
          toggleResume();
          if (isMobile) setToggle(false);
        }}>Resume</button>
      </li>
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={myImage} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            OLALEKAN&nbsp;<span className="sm:block hidden">BAMIGBOYE</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        {renderNavLinks(false)}

        {/* Mobile Nav */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 ${
              toggle ? 'rotate-90' : ''
            }`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`transition-all duration-300 ease-in-out transform origin-top-right absolute top-14 right-4 w-48 rounded-xl shadow-lg bg-white/10 backdrop-blur-md ${
              toggle ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <div className="p-4">
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
