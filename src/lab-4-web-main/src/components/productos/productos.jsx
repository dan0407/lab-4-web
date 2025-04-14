import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Productos = () => {
  return (
    <div>
      <Typography variant="h4">Lista de Productos</Typography>
      {/* Aquí se podrían agregar productos dinámicamente */}
      <Button variant="contained" color="primary">
        Producto 1
      </Button>
      <Link to="/mis-pedidos">
        <Button variant="contained" color="secondary">
          Ir a Mis Pedidos
        </Button>
      </Link>
    </div>
  );
};

export default Productos;
