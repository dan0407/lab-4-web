import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import './productos.css';

const Productos = () => {
	const productos = [
		{ id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1' },
		{ id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2' },
		{ id: 3, nombre: 'Producto 3', descripcion: 'Descripción del producto 3' },
	];

	return (
		<div className='productos-container'>
			<Typography variant='h4' gutterBottom>
				Productos Disponibles
			</Typography>
			<Grid container spacing={2}>
				{productos.map((producto) => (
					<Grid item xs={12} sm={6} md={4} key={producto.id}>
						<Card>
							<CardContent>
								<Typography variant='h6'>{producto.nombre}</Typography>
								<Typography variant='body2'>{producto.descripcion}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Productos;
