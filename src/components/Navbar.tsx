// eslint-disable @typescript-eslint/no-unused-expressions
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classNames from '../plugins/classNames';
import { useState, useEffect } from 'react';
function Navbar() {
	const [isActivated, setIsActivated] = useState(false);
	function toggleMenu() {
		setIsActivated(!isActivated);
	}
	useEffect(() => {}, [isActivated]);
	return (
		<>
			<nav aria-hidden={true} className='nav md:hidden'>
				<NavLogo />
				<div
					className={classNames([
						'nav-item-container',
						isActivated ? 'active backdrop' : '',
					])}>
					<div className='md:hidden w-1/5'>
						<button
							role='button'
							aria-label='Toggle Menu'
							onClick={toggleMenu}
							className='mx-2 mr-8 my-4 p-1 rounded-full text-ascent text-2xl'>
							{isActivated ? (
								<Icon icon='mdi:close' />
							) : (
								<Icon icon='mdi:menu' />
							)}
						</button>
					</div>
					<div className='md:hidden flex flex-col text-left my-24 gap-5'>
						<NavItems
							links={['Home', 'About', 'Portfolio', 'Blog']}
							close={() => toggleMenu()}></NavItems>
					</div>
				</div>
			</nav>
			<nav
				className='hidden md:flex flex-row justify-between px-8 py-4 sticky 
	top-0 left-0 z-50 w-screen bg-main shadow-sm shadow-black'>
				<NavLogo />
				<div className='nav-item-container'>
					<NavItems links={['Home', 'About', 'Portfolio', 'Blog']}></NavItems>
				</div>
			</nav>
		</>
	);
}

function NavLogo() {
	return (
		<div className='text-2xl'>
			<Link to='/'>
				<span>{'<DAJ/>'}</span>
			</Link>
		</div>
	);
}

function NavItems({ links, close }: { links?: string[]; close?: () => void }) {
	return (
		<>
			{links?.map((link) =>
				link.toLowerCase() === 'home' ? (
					<NavLink
						key={link}
						to={`/`}
						onClick={close}
						className='nav-item-element'>
						{link}
					</NavLink>
				) : (
					<NavLink
						key={link}
						to={`/${link.toLowerCase()}`}
						onClick={close}
						className='nav-item-element'>
						{link}
					</NavLink>
				)
			)}
		</>
	);
}
export default Navbar;
