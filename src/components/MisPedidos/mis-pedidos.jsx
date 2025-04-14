import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import './mis-pedidos.css';

const MisPedidos = () => {
	const pedidos = [
		{ id: 1, producto: 'Producto 1', fecha: '2025-04-01' },
		{ id: 2, producto: 'Producto 2', fecha: '2025-04-05' },
	];

	return (
		<div className='mis-pedidos-container'>
			<Typography variant='h4' gutterBottom>
				Mis Pedidos
			</Typography>
			<List>
				{pedidos.map((pedido) => (
					<ListItem key={pedido.id}>
						<ListItemText primary={pedido.producto} secondary={`Fecha: ${pedido.fecha}`} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default MisPedidos;
