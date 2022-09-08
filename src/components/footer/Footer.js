import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-info'>
            <h1>José Martínez Ríos</h1>
            <p>Based in Mexico</p>
        </div>
        <div className='footer-contact'>
            <h3>Contact me</h3>
            <p>Let's get down to work</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                Created with React
            </div>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/jose-martinez-rios-frontend-developer/' target="_blank" rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://github.com/josemartzrios' target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github github"></i>
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer