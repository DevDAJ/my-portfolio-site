import { FC, useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../plugins/firebase';
import { useNavigate } from 'react-router-dom';
import authstate from '../context/authState';

const Login: FC = ({}) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setAuthenticated } = useContext(authstate);
	return (
		<div className='flex flex-col items-center justify-center m-auto'>
			<h1 className='text-3xl'>Login</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					signInWithEmailAndPassword(auth, email, password)
						.then(() => {
							console.log('success');
							setAuthenticated(true);
							navigate('/dashboard');
						})
						.catch((err) => {
							console.log(err.message);
						});
				}}
				className='flex flex-col gap-4 mt-4'>
				<input
					onChange={(e) => setEmail(e.target.value)}
					name='email'
					type='text'
					placeholder='Email'
					className='border-2 border-gray-300 rounded-md p-2 text-black'
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					name='password'
					type='password'
					placeholder='Password'
					className='border-2 border-gray-300 rounded-md p-2 text-black '
				/>
				<button className='bg-blue-500 text-white rounded-md p-2'>Login</button>
			</form>
		</div>
	);
};

export default Login;
