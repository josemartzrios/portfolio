import React from 'react';
import "./About.css";


const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
          <h3>About me</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        {/* <div className='about-img'>
          <img src='https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''></img> 
        </div> */}
    </div>
  )
}

export default About