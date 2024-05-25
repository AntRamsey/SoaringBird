import React from 'react';
import { Modal } from 'antd';

const CustomModal = ({ visible, onCancel, image, text }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={800} // Adjust the width as needed
    >
      <img src={image} alt="Full Artwork" style={{ width: '100%' }} />
      <p style={{ marginTop: '10px' }}>{text}</p>
    </Modal>
  );
};

export default CustomModal;