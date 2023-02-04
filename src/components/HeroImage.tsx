import Svg from '../assets/hero-illustration.svg';
export default function HeroImage() {
	return (
		<object
			className='aspect-sqare -z-50 absolute h-[calc(100vh-20ch)] max-w-[70vw] right-11 bottom-0 md:bottom-auto'
			type='image/svg+xml'
			data={Svg}>
			svg-animation
		</object>
	);
}
