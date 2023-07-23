import React from 'react';
import './Header.css'
import images from '../../constants/images';

function Header() {
  return (
    <div className='hero' id='home'>
        <div className="hero_content">
            <h1>Next generation</h1>
            <h1>digital banking</h1>
            <p>Take your financial life online. Your EasyBank account will be a once-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <a className='nav_btn' href="#">Request Invite</a>
        </div>
        <div className="image_container">
          <div className="hero_images">
            <img className='desktop' src={images.introDesktop} alt="intro" />
            <img className='phone' src={images.phones} alt="phones" />
          </div>
        </div>
    </div>
  )
}

export default Header