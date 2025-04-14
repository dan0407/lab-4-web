import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<Typography variant='h4' gutterBottom>
				Bienvenidos a nuestra tienda!
			</Typography>
			<Typography variant='body1' gutterBottom>
				Explora nuestros productos y encuentra lo que necesitas.
			</Typography>
			<Link to='/productos'>
				<Button variant='contained' color='primary'>
					Explorar Productos
				</Button>
			</Link>
		</div>
	);
};

export default Home;
