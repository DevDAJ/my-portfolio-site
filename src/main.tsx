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
ReactDOM.createRoot(document.getElementById('links') as HTMLElement).render(
	<Socials></Socials>
);
function Socials() {
	const socials = [
		{ name: 'github', url: 'https://github.com/DevDAJ' },
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/danial-aiman-jamil-a71727155/',
		},
		{ name: 'twitter', url: 'https://twitter.com/D_AimanJ' },
		{ name: 'facebook', url: 'https://www.facebook.com/danial.a.jamil' },
		{ name: 'whatsapp', url: 'https://wa.me/+601110165333/' },
	];
	return (
		<div className='reverse gap-3 max-w-[3rem] justify-start px-2 self-end'>
			{socials.map((social) => (
				<a key={social['name']} href={social['url']}>
					<Icon
						aria-label={social['name']}
						width={'2rem'}
						icon={`mdi:${social['name']}`}
					/>
				</a>
			))}
		</div>
	);
}
