import MainRouter from './plugins/router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

function App() {
	return (
		<AnimatePresence>
			<Navbar />
			<MainRouter />
			<Footer />
		</AnimatePresence>
	);
}

export default App;
