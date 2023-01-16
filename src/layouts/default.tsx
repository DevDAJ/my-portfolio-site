import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
function Default() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default Default;
