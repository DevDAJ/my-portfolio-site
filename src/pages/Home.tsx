import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { db } from '../plugins/firebase';

function Home() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 2,
			},
		},
	};

	return (
		<>
			<motion.main
				className='px-7  flex flex-wrap hero text-clip md:text-clip'
				variants={container}
				initial='hidden'
				animate='show'>
				<div className='py-24 h-[calc(100vh-65px-80px)] mix-blend-difference'>
					<motion.h1
						className='text-4xl md:text-6xl'
						initial={{
							opacity: 0,
							y: 100,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{ duration: 0.5 }}>
						<strong>Danial A. Jamil</strong>
						<br />
						Fullstack Developer
					</motion.h1>
					<motion.div
						variants={container}
						initial='hidden'
						animate='show'
						className='flex flex-wrap'>
						<Skills />
					</motion.div>
				</div>
			</motion.main>
		</>
	);
}
function Skills() {
	const [skills, setSkill] = useState<any[]>([]);
	const fetchPost = async () => {
		await getDocs(collection(db, 'skills')).then((snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setSkill(data);
		});
	};
	useEffect(() => {
		fetchPost();
	}, []);
	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	const Technologies = skills.map((skill) => (
		<motion.div
			variants={item}
			key={skill.id}
			className='flex w p-2 border rounded-2xl my-1 mr-1 items-center'>
			<img
				width={20}
				height={'auto'}
				alt={`${skill['name']} icon`}
				className='aspect-square object-contain'
				src={skill['icon']}></img>
			<span className='pl-2'>{skill['name']}</span>
		</motion.div>
	));
	return <>{Technologies}</>;
}
export default Home;
