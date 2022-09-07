import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides';
import "./Slider.css";


const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
          <h3>My projects</h3>
        </div>

        <Carousel 
          arrows
          slidesPerPage={1}
          infinite
          animationSpeed={200}
          centered
          offset={50}
          itemWidth={300}
          slides={Slides}
        />
    </div>
  )
}

export default Slider