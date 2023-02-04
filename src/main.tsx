import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Icon } from '@iconify/react';
import './index.css';
import { Head } from './components/Head';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Head />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
