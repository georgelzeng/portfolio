import React from 'react';
import { Fade } from 'react-slideshow-image';
import about_pic from '../assets/about_pic.JPG'
import squaw from '../assets/squaw.JPG'
import grad from '../assets/grad.JPG'
import nyc from '../assets/nyc.JPG'

import Slider from 'react-slick';


const fadeImages = [
  about_pic, 
  squaw, 
  grad, 
  nyc
];
 
const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
   
  const Carousel = () => {
    return (
        <div className='carousel-container'>
            <img src={fadeImages[0]} />
            <img src={fadeImages[1]} />
            <img src={fadeImages[2]} />
            <img src={fadeImages[3]} />
        </div>
    )
  }

export default Carousel;