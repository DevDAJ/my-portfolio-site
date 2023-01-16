import { Outlet } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';
function Protected() {
	return (
		<>
			<DashboardNav />
			<Outlet />
		</>
	);
}

export default Protected;
