import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import ArtistList from './ArtistList';

const ArtistPage = () => {
  const { artistName } = useParams();
  console.log('artistName from useParams:', artistName);

  const artist = ArtistList.find(
    (artist) => artist.name.toLowerCase().replace(/\s+/g, '-') === artistName
  );
  console.log('Matched artist:', artist);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-page">
      <h2>{artist.name}</h2>
      <div className="artist-images-grid">
        {artist.images.map((src, index) => (
          <img key={index} src={src} alt={`${artist.name} work ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
