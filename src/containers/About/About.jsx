import React from 'react';
import './About.css';
import images from '../../constants/images';

function About() {
  return (
    <div className='about' id='about'>
        <div className="about_content">
            <h1>Why choose EasyBank?</h1>
            <p>We leverage Open Banking to urn your bank account into your finatial hub.</p>
            <p>Control your finances like never before.</p>
        </div>
        <div className="about_cards">
            <div className="about_card">
                <img src={images.online} alt="online banking" />
                <h3>Online Banking</h3>
                <p>Our morden web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className="about_card">
                <img src={images.budgeting} alt="online banking" />
                <h3>Simple Budgeting</h3>
                <p>See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.</p>
            </div>
            <div className="about_card">
                <img src={images.onboarding} alt="online banking" />
                <h3>Fast Onboarding</h3>
                <p>We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.</p>
            </div>
            <div className="about_card">
                <img src={images.api} alt="online banking" />
                <h3>Open API</h3>
                <p>Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.</p>
            </div>
        </div>
    </div>
  )
}

export default About