/* eslint-disable */
// @ts-nocheck
import { useEffect } from 'react';
import Svg from '../assets/hero-illustration.svg';
export default function HeroImage() {
	return (
		<object
			className='invisible md:visible -z-50 absolute max-h-[calc(100vh-20ch)] right-11'
			type='image/svg+xml'
			data={Svg}>
			svg-animation
		</object>
	);
}
