// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="profile" />
      <h1><span>I&apos;m Ravi Shankar,</span> full stack developer based in India.</h1>
      <p>I am a full Stack developer from Tamil Nadu, India with 2 years of experience in multiple companies like Apple, Microsoft and Tesla.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
