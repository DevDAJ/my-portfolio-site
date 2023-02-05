import { Icon } from '@iconify/react';

function Footer() {
	return (
		<footer className='flex flex-col items-center md:flex-row justify-between p-7 text-gray-500 mt-auto'>
			<p className='md:order-3'>
				Made by <a href='https://devdaj.tech'>DAJ</a>
			</p>
			<div className='flex justify-center px-2 md:order-2'>
				<Socials />
			</div>
			<p>Illustrations by freepik</p>
		</footer>
	);
}

export default Footer;

function Socials() {
	const socials = [
		{ name: 'whatsapp', url: 'https://wa.me/+601110165333/' },
		{ name: 'email', url: 'mailto://danial.aiman.j@gmail.com' },
		{
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/danial-aiman-jamil-a71727155/',
		},
		{ name: 'twitter', url: 'https://twitter.com/D_AimanJ' },
		{ name: 'facebook', url: 'https://www.facebook.com/danial.a.jamil' },
		{ name: 'github', url: 'https://github.com/DevDAJ' },
	];
	return (
		<>
			{socials.map((social) => (
				<a
					aria-label={social['name']}
					key={social['name']}
					href={social['url']}>
					<Icon width={'2rem'} icon={`mdi:${social['name']}`} />
				</a>
			))}
		</>
	);
}
