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
            <h2>Contact me</h2>
            <p>Let's get down to work</p>
        </div>
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
            <a href="mailto:josmarios@outlook.com" target="_blank" rel="noreferrer">
                <i class="fa-solid fa-envelope mail"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer