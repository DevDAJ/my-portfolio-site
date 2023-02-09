import classNames from '../plugins/classNames';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

type Project = {
	title: string;
	description: string;
	tech: Array<string>;
	images?: string;
	link?: string;
	code?: string;
};

export default function Portoflio() {
	const [projects, setProjects] = useState<Array<Project>>([]);
	useEffect(() => {
		fetch(
			'https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/projects?select=*',
			{
				method: 'GET',
				headers: {
					apikey:
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoeGRpeXN4ZHlnY2xjZ3p3d251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU0MTY0ODgsImV4cCI6MTk5MDk5MjQ4OH0.xBelqgXTEqgdMOhx-224kJlmNDYg9kXBVy1-iwRooXE',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoeGRpeXN4ZHlnY2xjZ3p3d251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU0MTY0ODgsImV4cCI6MTk5MDk5MjQ4OH0.xBelqgXTEqgdMOhx-224kJlmNDYg9kXBVy1-iwRooXE',
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProjects(data);
			});
	}, []);
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const listItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<div className='relative'>
			{projects.map((project, index) => {
				return (
					<div
						key={index}
						style={{
							backgroundImage: `url(${project.images})`,
						}}
						className={classNames([
							`flex flex-col lg:flex-row justify-end min-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-4rem)] lg:aspect-video w-screen bg-top bg-contain bg-fixed bg-no-repeat`,
							index % 2 == 0
								? 'lg:justify-start lg:text-left lg:bg-right'
								: 'lg:justify-end lg:text-right lg:bg-left',
							,
						])}>
						<motion.div
							variants={container}
							initial='hidden'
							whileInView='show'
							className='flex flex-col items-center gap-2 p-12 bg-main lg:min-h-[inherit] justify-center lg:w-1/3'>
							<h2 className='text-4xl glow font-bold text-ascent whitespace-nowrap'>
								{project.title}
							</h2>
							<p className='text-sm'>{project.description}</p>
							<div
								className={classNames([
									'flex flex-row md:gap-2',
									index % 2 == 0 ? 'justify-start' : 'justify-end',
								])}>
								{project.tech.map((tech, index) => {
									return (
										<motion.div
											key={index}
											variants={listItem}
											className='flex flex-col items-center m-2 relative'>
											<Icon
												className='stroke-current '
												width={30}
												height={30}
												color='#fff'
												icon={`logos:${tech.toLowerCase()}`}
											/>
										</motion.div>
									);
								})}
							</div>
							<div className='flex gap-5 text-2xl'>
								{project.link && (
									<a href={project.link}>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className='bg-ascent text-white p-2 aspect-square rounded-md glow'>
											<Icon icon='mdi:link-variant' />
										</motion.button>
									</a>
								)}
								{project.code && (
									<a href={project.code}>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className='bg-ascent text-white p-2 rounded-md glow'>
											<Icon icon='mdi:github' />
										</motion.button>
									</a>
								)}
							</div>
						</motion.div>
					</div>
				);
			})}
		</div>
	);
}
