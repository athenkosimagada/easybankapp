import { useState, useRef } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa'; 
import images from '../../constants/images';
import './Navbar.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const navRef = useRef(null);

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  const backgroundRef = useRef(null);

  const showbackground = () => {
    navRef.current.classList.toggle('back_color');
  }

  const handleNavButtonClick = () => {
    toggleNav();
    showNavBar();
    showbackground();
  }

  return (
    <div className='nav'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="Logo" />
        </div>
        <div className={`menu ${showNav ? 'back_color' : ''}`} ref={backgroundRef}>
        <ul className={`app__navbar-links ${showNav ? 'responsive_nav' : ''}`} ref={navRef}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#coreer">Careers</a></li>
          </ul>
        </div>
        <div className="nav_invite">
          <a className='nav_btn' href='#'>Request Invite</a>
        </div>
        <div className="nav_open">
        <button className='btn' onClick={handleNavButtonClick}>
          {showNav ? <FaTimes /> : <FaBars />}
        </button>
        </div>
    </div>
  );
}

export default Navbar