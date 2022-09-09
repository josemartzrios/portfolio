import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg",
    alt: "Project 1",
    desc: "E-commerce",
    link: "https://josemartzrios.github.io/shopping-macropay/",
  },
  {
    src:
      "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YyVDMyVCM2RpZ298ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    alt: "Project 2",
    desc: "Game",
    link: "https://josemartzrios.github.io/guess-number/",
  },
  {
    src:
      "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGMlQzMlQjNkaWdvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Project 3",
    desc: "Landing",
    link: "https://josemartzrios.github.io/cripto-app/",
  },
];


const slides = slidesInfo.map(slide => ( 
  <div className="slide-container">
    <a href={slide.link}><img src={slide.src} alt={slide.alt}></img></a>
    <div className="slide-desc">
      <span>{slide.desc}</span> 
    </div>
  </div>
));

export default slides;