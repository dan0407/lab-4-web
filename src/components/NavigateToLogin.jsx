import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const NavigateToLogin = ({ setAccessDenied }) => {
	useEffect(() => {
		setAccessDenied(true);
	}, [setAccessDenied]);

	return <Navigate to='/' />;
};

export default NavigateToLogin;
