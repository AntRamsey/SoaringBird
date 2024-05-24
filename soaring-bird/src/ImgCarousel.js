import React from 'react';
import { Carousel } from 'antd';
import './index.css'; // Ensure you import the CSS file

const contentStyle = {
  height: '400px',
  width: '100%', // Ensure the image takes the full width of the container
  objectFit: 'cover', // Ensure the image covers the container without stretching
};


const images = [
    require('./images/alley.jpg'),
    require('./images/antlers.jpg'),
    require('./images/diamonds.jpg'),
    require('./images/fierce.jpg'),
    require('./images/flower.jpg'),
    require('./images/mother.jpg'),
    require('./images/reaching.jpg'),
    require('./images/snakes.jpg'),
  ];

  const ImageCarousel = () => {
    return (
      <div className="carousel-container">
        <Carousel arrows infinite={true}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index + 1}`} style={contentStyle} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  
  export default ImageCarousel;