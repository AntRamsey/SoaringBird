import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ArtistList from './ArtistList';

const Artists = () => {
  return (
    <div className="artists-container">
      {ArtistList.map((artist, index) => (
        <div key={index} className="artist-card">
          <div className="artist-content">
            <img src={artist.images[0]} alt={artist.name} className="artist-thumbnail" />
            <Link to={`/artists/${artist.name.toLowerCase().replace(/\s+/g, '-')}`} className="artist-link">
              {artist.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artists;
