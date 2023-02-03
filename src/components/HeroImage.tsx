import Svg from '../assets/hero-illustration.svg';
export default function HeroImage() {
	return (
		<object
			className='invisible md:visible aspect-sqare -z-50 absolute h-[calc(100vh-20ch)] max-w-[50vw] right-11'
			type='image/svg+xml'
			data={Svg}>
			svg-animation
		</object>
	);
}
