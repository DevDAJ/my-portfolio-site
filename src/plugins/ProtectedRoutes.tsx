import { FC, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authState from '../context/authState';
import { redirect } from 'react-router-dom';
import Login from '../pages/Login';
const ProtectedRoutes: FC = ({}) => {
	const { authenticated } = useContext(authState);
	return authenticated ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
