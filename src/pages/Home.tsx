import { motion } from 'framer-motion';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import HeroImage from '../components/HeroImage';

function Home() {
	return (
		<>
			<motion.main
				className='home-main'
				initial={{
					opacity: 0,
					y: 100,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{ duration: 0.5 }}>
				<span className='text-xl md:text-3xl'>Hello there!</span>
				<h1 className='text-4xl md:text-6xl max-w-[700vw] min-h-[5rem] md:min-h-[8rem]'>
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
				<div className='flex justify-center md:justify-start md:ml-10 mt-5 text-left text-base md:text-xl h-10 w-[80%]'>
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
		<Link aria-label={text} to={`/${link}`}>
			<button className='p-1 m-1 md:p-2  border-ascent glow border w-fit whitespace-nowrap rounded-md md:m-4 transition-all
			 hover:border-red-400 hover:shadow-red-400 hover:scale-[1.1] bg-main'>
				{text}
			</button>
		</Link>
	);
}
