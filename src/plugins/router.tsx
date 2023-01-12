import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

function MainRouter() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='blog' element={<Blog />} />
				<Route path='portfolio' element={<Portfolio />} />
			</Routes>
		</>
	);
}

export default MainRouter;
