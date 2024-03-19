// BackToTopButton.js
import React from 'react';
import { IconButton } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#000',
        color: '#fff',
        zIndex: '1000'
      }}
    >
      <KeyboardArrowUp />
    </IconButton>
  );
}

export default BackToTopButton;