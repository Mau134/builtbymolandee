import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // 👈 add these icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      {/* Desktop Menu */}
      <div className="deskTopMenu">
        <Link
          to="home"
          className="desktopMenuItem"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Home
        </Link>
        <Link
          to="about"
          className="desktopMenuItem"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          About
        </Link>
        <Link
          to="portfolio"
          className="desktopMenuItem"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Portfolio
        </Link>
        <Link
          to="clients"
          className="desktopMenuItem"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Clients
        </Link>
      </div>

      {/* Desktop Contact Button */}
      <button
        className="deskTopMenuBtn"
        onClick={() => handleLinkClick('contact')}
      >
        <img src={contactImg} alt="" className="deskTopMenuImg" /> Contact Me
      </button>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="mobileMenuIcon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobileMenu">
          {['home', 'about', 'portfolio', 'clients', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              className="mobileMenuItem"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => handleLinkClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
