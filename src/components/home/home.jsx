import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Typography variant="h4">Bienvenidos a nuestra tienda!</Typography>
      <Link to="/productos">
        <Button variant="contained" color="primary">Explorar Productos</Button>
      </Link>
    </div>
  );
};

export default Home;
