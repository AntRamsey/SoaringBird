import React, { useState } from 'react';
import { Carousel } from 'antd';
import './index.css';
import Modal from './Modal';

const contentStyle = {
  height: '80vh',
  width: '100%',
  objectFit: 'cover',
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

const ImgCarousel = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <>
      <div className='carousel-container'>
        <Carousel arrows infinite={true}>
          {images.map((src, index) => (
            <div key={index} onClick={() => handleImageClick(src)}>
              <img src={src} alt={`Slide ${index + 1}`} style={contentStyle} />
            </div>
          ))}
        </Carousel>
      </div>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          image={selectedImage}
          text="Your text here" // Replace with your desired text
        />
      )}
    </>
  );
};

export default ImgCarousel;