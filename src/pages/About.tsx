import { FC, useEffect, useState } from 'react';
import { db } from '../plugins/firebase';
import { collection, getDocs } from 'firebase/firestore';
const About: FC = ({}) => {
	return (
		<div className=' flex flex-col px-7'>
			<main className='py-32'>
				<h1 className='text-3xl'>
					<strong>More about me....</strong>
				</h1>
				<p className='w-60 md:w-96 mt-4'>
					Hello, my name is Danial Aiman Jamil and I have a deep love towards
					creating new things.
				</p>
			</main>
			<section className='flex flex-col items-center'>
				<h1 className='text-3xl mb-4'>
					<strong>Skills</strong>
				</h1>
				<div className='flex gap-32 flex-wrap justify-center'>
					<Skills />
				</div>
			</section>
			<section className='mt-10 flex flex-col items-center'>
				<h1 className='text-3xl'>
					<strong>My resume</strong>
				</h1>
				<iframe
					title='resume'
					src='http://docs.google.com/gview?url=https://devdaj.tech/resume.pdf&embedded=true'
					width='auto'
					height='auto'
					className='mt-4'
					allow='autoplay'></iframe>
			</section>
		</div>
	);
};

export default About;

function Skills() {
	const [skills, setSkill] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchPost = async () => {
		await getDocs(collection(db, 'skills')).then((snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setSkill(data);
			setLoading(false);
		});
	};
	useEffect(() => {
		fetchPost();
	}, []);

	const Technologies = skills.map((skill) => (
		<div key={skill.id} className='flex flex-col justify-center items-center'>
			<img
				width={100}
				height={'auto'}
				alt={`${skill['name']} icon`}
				className='m-auto aspect-square object-contain'
				src={skill['icon']}></img>
			<span>{skill['name']}</span>
		</div>
	));
	return <>{loading ? <LoadingSVG /> : <>{Technologies}</>}</>;
}

// Create an aniamting loading SVG
function LoadingSVG() {
	return (
		<div className='flex flex-col justify-center items-center'>
			<svg
				width='100'
				height='100'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'
				className='lds-rolling'>
				<circle
					cx='50'
					cy='50'
					fill='none'
					stroke='#FFF'
					strokeWidth='10'
					r='35'
					strokeDasharray='164.93361431346415 56.97787143782138'
					transform='rotate(0 50 50)'>
					<animateTransform
						attributeName='transform'
						type='rotate'
						calcMode='linear'
						values='0 50 50;360 50 50'
						keyTimes='0;1'
						dur='1s'
						begin='0s'
						repeatCount='indefinite'></animateTransform>
				</circle>
			</svg>
		</div>
	);
}
