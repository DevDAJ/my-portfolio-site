import { motion } from 'framer-motion';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import HeroImage from '../components/HeroImage';

function Home() {
	return (
		<>
			<motion.main
				className='mx-12 flex flex-col justify-center hero text-clip md:text-clip w-full aspect-video max-h-[50vh] md:max-h-[calc(100vh-20ch)] my-7  '
				initial={{
					opacity: 0,
					y: 100,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{ duration: 0.5 }}>
				<span className='text-2xl md:text-3xl'>Hello there!</span>
				<h1 className='text-4xl md:text-6xl '>
					I'm{' '}
					<strong className='text-ascent'>
						<Typed
							strings={[
								'Danial Aiman Jamil',
								'a full-stack developer',
								'a passionate learner',
							]}
							typeSpeed={40}
							backSpeed={50}
							loop></Typed>
					</strong>
				</h1>
				<div className='flex ml-10 mt-5 text-left text-xs md:text-xl h-10 w-1/2'>
					<HeroButton text='Learn more' link='about' />
					<HeroButton text='My works' link='portfolio' />
					<HeroButton text='Blog' link='blog' />
				</div>
				<HeroImage />
			</motion.main>
		</>
	);
}
export default Home;

function HeroButton({ text, link }: { text: string; link: string }) {
	return (
		<Link to={`/${link}`}>
			<button className='p-1 m-1 md:p-2 border-ascent border w-fit  rounded-md md:m-4 shadow-[0px_0px_20px_rgba(125,18,255,1)] shadow-ascent transition-all hover:border-red-400 hover:shadow-red-400 hover:scale-[1.1] bg-main'>
				{text}
			</button>
		</Link>
	);
}
