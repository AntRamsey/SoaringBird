import React from 'react';
import './index.css';

const artists = [
  { name: 'Artist 1', image: require('./images/alley.jpg') },
  { name: 'Artist 2', image: require('./images/antlers.jpg') },
  { name: 'Artist 3', image: require('./images/diamonds.jpg') },
  { name: 'Artist 4', image: require('./images/fierce.jpg') },
  { name: 'Artist 5', image: require('./images/flower.jpg') },
  { name: 'Artist 6', image: require('./images/mother.jpg') },
  { name: 'Artist 7', image: require('./images/reaching.jpg') },
  { name: 'Artist 8', image: require('./images/snakes.jpg') },
];

const Artists = () => {
  return (
    <div className="artists-container">
      {artists.map((artist, index) => (
        <div key={index} className="artist-card">
          <img src={artist.image} alt={artist.name} className="artist-thumbnail" />
          <p>{artist.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Artists;