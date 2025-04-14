import React from 'react';
import { Button, Typography } from '@mui/material';

const Login = ({ onLogin }) => {
  return (
    <div>
      <Typography variant="h4">Acceso Denegado</Typography>
      <Typography>Necesitas estar autenticado para ver esta página.</Typography>
      <Button variant="contained" onClick={onLogin}>Iniciar sesión</Button>
    </div>
  );
};

export default Login;
