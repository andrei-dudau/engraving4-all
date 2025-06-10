import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Chatbot } from './chatbot'; 
import { Box } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: '64px' }}>
        <Outlet />
      </Box>
      {/* Add the Chatbot component */}
      <Chatbot />
    </>
  );
};

export default Layout;
