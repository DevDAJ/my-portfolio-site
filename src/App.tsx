import MainRouter from './plugins/router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
	return (
		<>
			<Navbar />
			<MainRouter />
			<Footer />
		</>
	);
}

export default App;
