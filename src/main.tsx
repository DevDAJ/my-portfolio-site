import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Icon } from '@iconify/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
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
		<div className='[display:none;] md:flex flex-col-reverse gap-3 max-w-[3rem] justify-start px-2 self-end'>
			{socials.map((social) => (
				<a href={social['url']}>
					<Icon width={'2rem'} icon={`mdi:${social['name']}`} />
				</a>
			))}
		</div>
	);
}
