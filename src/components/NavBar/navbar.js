import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="deskTopMenu">
        <Link
          to="home"
          className="desktopMenuItem"
          activeClass='active'
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
          activeClass='active'
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
          activeClass='active'
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
          activeClass='active'
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Clients
        </Link>
      </div>
      <button className="deskTopMenuBtn" onClick={() =>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
      }}>
        <img src={contactImg} alt="" className="deskTopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
