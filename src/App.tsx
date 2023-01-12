import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainRouter from './plugins/router';
function App() {
	return (
		<>
			<Navbar />
			<MainRouter />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
