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
  { src: require('./images/alley.jpg'), artist: 'Artist 1' },
  { src: require('./images/TG1.jpg'), artist: 'Troy Gosz' },
  { src: require('./images/TG4.jpg'), artist: 'Troy Gosz' },
  { src: require('./images/TG8.jpg'), artist: 'Troy Gosz' },
  { src: require('./images/JMG1.png'), artist: 'Jessica M. Gutiérrez' },
  { src: require('./images/JMG3.png'), artist: 'Jessica M. Gutiérrez' },
  { src: require('./images/JMG7.png'), artist: 'Jessica M. Gutiérrez' },
  { src: require('./images/snakes.jpg'), artist: 'Artist 8' },
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
      <div className="carousel-container">
        <Carousel autoplay arrows infinite={true}>
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={`Slide ${index + 1}`} style={contentStyle} />
            </div>
          ))}
        </Carousel>
      </div>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          image={selectedImage.src}
          artist={selectedImage.artist}
        />
      )}
    </>
  );
};

export default ImgCarousel;