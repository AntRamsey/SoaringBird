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

  const renderContactInfo = () => {
    return artist.contact.map((contact, index) => {
      const isLink = contact.startsWith('http') || contact.startsWith('mailto');
      return (
        <p key={index}>
          {isLink ? (
            <a href={contact} target="_blank" rel="noopener noreferrer">{contact}</a>
          ) : (
            contact
          )}
        </p>
      );
    });
  };

  return (
    <div className="artist-page">
      <h2>{artist.name}</h2>
      <div className="artist-images-grid">
        {artist.images.map((src, index) => (
          <img key={index} src={src} alt={`${artist.name} work ${index + 1}`} />
        ))}
      </div>
      <div className="contact-info">
        <h1>Contact the Artist</h1>
        {renderContactInfo()}
      </div>
    </div>
  );
};

export default ArtistPage;
