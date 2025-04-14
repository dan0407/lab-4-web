import React from 'react';
import { Button, TextField, Container } from '@mui/material';
import './login.css';

const Login = ({ onLogin }) => {
	return (
		<Container>
			<h2>Iniciar Sesión</h2>
			<TextField label='Usuario' fullWidth margin='normal' />
			<TextField label='Contraseña' type='password' fullWidth margin='normal' />
			<Button variant='contained' color='primary' onClick={onLogin}>
				Iniciar Sesión
			</Button>
		</Container>
	);
};

export default Login;
