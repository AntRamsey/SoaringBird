import React from 'react';
import { Modal as AntdModal } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

const Modal = ({ visible, onCancel, image, artist }) => {
  const artistLink = artist ? `/artists/${artist.toLowerCase().replace(/\s+/g, '-')}` : '#';

  return (
    <AntdModal open={visible} onCancel={onCancel} footer={null}>
      <img src={image} alt="Selected" style={{ width: '100%', height: 'auto' }} />
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <Link to={artistLink} className="modal-artist-link">
          {artist}
        </Link>
      </div>
    </AntdModal>
  );
};

export default Modal;
