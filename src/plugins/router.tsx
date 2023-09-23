import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Post from '../pages/Post';
import Resume from '../pages/Resume';

function MainRouter() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='blog' element={<Blog />} />
				<Route path='blog/:id' element={<Post />} />
				<Route path='portfolio' element={<Portfolio />} />
				<Route path='resume' element={<Resume />} />
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</>
	);
}

export default MainRouter;
