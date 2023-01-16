import MainRouter from './plugins/router';
import authState from './context/authState';
import usePersistState from './hooks/userPersistState';
import Default from './layouts/default';
import Protected from './layouts/Protected';
import Footer from './components/Footer';
function App() {
	const [authenticated, setAuthenticated] = usePersistState(
		'authenticated',
		false
	);

	return (
		<authState.Provider value={{ authenticated, setAuthenticated }}>
			{authenticated ? <Protected /> : <Default />}
			<MainRouter />
			<Footer />
		</authState.Provider>
	);
}

export default App;
