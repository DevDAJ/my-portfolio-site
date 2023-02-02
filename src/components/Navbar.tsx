import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='flex flex-row justify-center md:justify-between px-8 py-4 sticky top-0 left-0 z-50 mix-blend-difference backdrop-blur-xl w-screen'>
			<NavLogo />
			<NavItems links={['Home', 'About', 'Portfolio', 'Blog']}></NavItems>
		</nav>
	);
}

function NavLogo() {
	return (
		<div className='text-2xl hidden md:flex'>
			<Link to='/'>
				<span>{'<DAJ/>'}</span>
			</Link>
		</div>
	);
}

function NavItems({ links }: { links?: string[] }) {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-5 text-2xl'>
			{links?.map((link) =>
				link.toLowerCase() === 'home' ? (
					<NavLink
						key={link}
						to={`/`}
						className='after:content-[""] after:block after:w-auto after:h-[1px] hover:after:bg-blue-600 [&.active]:after:bg-violet-700'>
						{link}
					</NavLink>
				) : (
					<NavLink
						key={link}
						to={`/${link.toLowerCase()}`}
						className='after:content-[""] after:block after:w-auto after:h-[1px] hover:after:bg-blue-600 [&.active]:after:bg-violet-700'>
						{link}
					</NavLink>
				)
			)}
		</div>
	);
}
export default Navbar;
