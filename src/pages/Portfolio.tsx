import classNames from '../plugins/classNames';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

type Project = {
	name: string;
	description: string;
	tech: Array<string>;
	image: string;
	link: string;
	code: string;
};

export default function Portfolio() {
	return <></>;
}
// export default function Portfolio() {
// 	const [projects, setProjects] = useState([]);
// 	useEffect(() => {
// 		fetch(
// 			'https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/projects?select=name%2Cdescription%2Cimage%2Clink%2Ccode',
// 			{
// 				method: 'GET',
// 				headers: {
// 					apikey: '',
// 				},
// 			}
// 		)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setProjects(data);
// 			});
// 	}, []);

// 	const container = {
// 		hidden: { opacity: 0 },
// 		show: {
// 			opacity: 1,
// 			transition: {
// 				staggerChildren: 0.05,
// 			},
// 		},
// 	};

// 	const listItem = {
// 		hidden: { opacity: 0 },
// 		show: { opacity: 1 },
// 	};
// 	return (
// 		<div className='relative'>
// 			{projects.map((project, index) => {
// 				return (
// 					<div
// 						key={index}
// 						className={classNames([
// 							`flex flex-col lg:flex-row justify-end min-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-4rem)] lg:aspect-video w-screen [background-image:_url(${project.image})] bg-cover bg-fixed bg-no-repeat bg-left`,
// 							index % 2 == 0
// 								? 'lg:justify-start text-left'
// 								: 'lg:justify-end text-right',
// 							,
// 						])}>
// 						<motion.div
// 							variants={container}
// 							initial='hidden'
// 							whileInView='show'
// 							className='flex flex-col items-center gap-2 p-12 bg-main lg:min-h-[inherit] justify-center lg:w-1/3'>
// 							<h2 className='text-4xl glow font-bold text-ascent whitespace-nowrap'>
// 								{project.title}
// 							</h2>
// 							<p className='text-sm'>{project.description}</p>
// 							<div
// 								className={classNames([
// 									'flex flex-row md:gap-2',
// 									index % 2 == 0 ? 'justify-start' : 'justify-end',
// 								])}>
// 								{project.tech.map((tech, index) => {
// 									return (
// 										<motion.div
// 											key={index}
// 											variants={listItem}
// 											className='flex flex-col items-center m-2 relative'>
// 											<Icon
// 												className='stroke-current '
// 												width={30}
// 												height={30}
// 												color='#fff'
// 												icon={`logos:${tech.toLowerCase()}`}
// 											/>
// 										</motion.div>
// 									);
// 								})}
// 							</div>
// 							<div className='flex gap-5 text-2xl'>
// 								{project.link && (
// 									<motion.button
// 										whileHover={{ scale: 1.1 }}
// 										whileTap={{ scale: 0.9 }}
// 										className='bg-ascent text-white p-2 aspect-square rounded-md glow'>
// 										<Icon icon='mdi:link-variant' />
// 									</motion.button>
// 								)}
// 								{project.code && (
// 									<motion.button
// 										whileHover={{ scale: 1.1 }}
// 										whileTap={{ scale: 0.9 }}
// 										className='bg-ascent text-white p-2 rounded-md glow'>
// 										<Icon icon='mdi:github' />
// 									</motion.button>
// 								)}
// 							</div>
// 						</motion.div>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }
