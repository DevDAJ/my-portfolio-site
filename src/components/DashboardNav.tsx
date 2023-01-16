import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import authState from '../context/authState';

const auth = getAuth();

function DashboardNav() {
	const { setAuthenticated } = useContext(authState);
	return (
		<nav className='dashboard-nav'>
			<button
				onClick={() => {
					signOut(auth)
						.then(() => {
							// Sign-out successful.
							setAuthenticated(false);
						})
						.catch((error) => {
							// An error happened.
						});
				}}>
				log out
			</button>
		</nav>
	);
}

export default DashboardNav;
