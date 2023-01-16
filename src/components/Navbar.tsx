import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<nav className='flex flex-row justify-center md:justify-between md:px-8 py-4 sticky top-0 left-0'>
			<NavLogo />
			<NavItems>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/portfolio'>Portfolio</Link>
				<Link to='/blog'>Blog</Link>
			</NavItems>
		</nav>
	);
}

function NavLogo() {
	return (
		<div className='text-2xl hidden md:flex'>
			<Link to='/'>
				<img></img> <span>{'<DAJ/>'}</span>
			</Link>
		</div>
	);
}

function NavItems(props: PropsWithChildren) {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-5 text-2xl'>
			{props.children}
		</div>
	);
}
export default Navbar;
