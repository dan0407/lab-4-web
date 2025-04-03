import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import Home from './components/home/home';
import Productos from './components/productos/productos';
import MisPedidos from './components/MisPedidos/mis-pedidos';
import Login from './components/LOGIN/login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Container>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/mis-pedidos"
            element={isAuthenticated ? <MisPedidos /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

