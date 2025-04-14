import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
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

	const LoginPage = () => {
		const navigate = useNavigate();

		const handleLoginAndNavigate = () => {
			localStorage.setItem('isAuthenticated', 'true');
			setIsAuthenticated(true);
			navigate('/home');
		};

		return <Login onLogin={handleLoginAndNavigate} />;
	};

	const LogoutButton = () => {
		const navigate = useNavigate();

		const handleLogout = () => {
			localStorage.setItem('isAuthenticated', 'false');
			setIsAuthenticated(false);
			navigate('/login'); // Redirigir a /login después de cerrar sesión
		};

		return (
			<Button variant='contained' onClick={handleLogout}>
				Logout
			</Button>
		);
	};

	return (
		<Router>
			<Container>
				<LogoutButton />
				<Routes>
					<Route path='/' element={<Navigate to='/login' />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/home' element={<Home />} />
					<Route path='/productos' element={<Productos />} />
					<Route path='/mis-pedidos' element={isAuthenticated ? <MisPedidos /> : <Navigate to='/login' />} />
				</Routes>
			</Container>
		</Router>
	);
};

export default App;
