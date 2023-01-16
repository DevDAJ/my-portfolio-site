import { FC, useContext } from 'react';
import authState from '../../context/authState';

const Login: FC = ({}) => {
	const { authenticated } = useContext(authState);
	return <p>dashboard {`${authenticated}`}</p>;
};

export default Login;
