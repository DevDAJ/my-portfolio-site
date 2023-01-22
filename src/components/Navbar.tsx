import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
	return (
		<nav className='flex flex-row justify-center md:justify-between md:px-8 py-4 sticky top-0 left-0 z-50 mix-blend-difference backdrop-blur-sm'>
			<NavLogo />
			<NavItems>
				<Link
					to='/'
					className='after:content-[""] after:block after:w-auto after:h-[1px] hover:after:bg-blue-600'>
					Home
				</Link>
				<Link
					to='/about'
					className='after:content-[""] after:block after:w-auto after:h-[1px] hover:after:bg-blue-600'>
					About
				</Link>
				<Link
					to='/portfolio'
					className='after:content-[""] after:block after:w-auto after:h-[1px] hover:after:bg-blue-600'>
					Portfolio
				</Link>
				<Link
					to='/blog'
					className='after:content-[""] after:block after:w-auto after:h-[1px] hover:after:bg-blue-600'>
					Blog
				</Link>
			</NavItems>
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

function NavItems(props: PropsWithChildren) {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-5 text-2xl'>
			{props.children}
		</div>
	);
}
export default Navbar;
