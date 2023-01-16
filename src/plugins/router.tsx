import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Portfolio from '../pages/Portfolio';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardBlog from '../pages/dashboard/DashboardBlog';
import DashboardPortfolio from '../pages/dashboard/DashboardPortfolio';
import DashboardSkills from '../pages/dashboard/DashboardSkills';

function MainRouter() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='blog' element={<Blog />} />
				<Route path='portfolio' element={<Portfolio />} />
				<Route element={<ProtectedRoutes />}>
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='dashboard/blog' element={<DashboardBlog />} />
					<Route path='dashboard/portfolio' element={<DashboardPortfolio />} />
					<Route path='dashboard/skills' element={<DashboardSkills />} />
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</>
	);
}

export default MainRouter;
