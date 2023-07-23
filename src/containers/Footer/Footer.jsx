import React from 'react';
import './Footer.css';
import images from '../../constants/images';

function Footer() {
  return (
    <div className='footer'>
        <div className='left'>
            <div className="item1">
                <img className='change' src={images.logo} alt="logo" />
                <div className='social'>
                    <img src={images.facebook} alt="logo" />
                    <img src={images.youtube} alt="logo" />
                    <img src={images.twitter} alt="logo" />
                    <img src={images.pinterest} alt="logo" />
                    <img src={images.instagram} alt="logo" />
                </div>
            </div>
            <div className="item2">
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#blog">Blog</a>
            </div>

            <div className="item3">
                <a href="#careers">Careers</a>
                <a href="#support">Support</a>
                <a href="#policy">Privacy Policy</a>
            </div>
        </div>
        <div className="item4">
            <div className="btn">
            <a className='nav_btn' href="#">Request Invite</a>
            </div>
            <a href="#policy">&copy;Easybank All Rights Reserved</a>
        </div>

    </div>
  )
}

export default Footer