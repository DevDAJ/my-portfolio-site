import { Icon } from '@iconify/react';
import { FC, useState, useEffect } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

type Skill = {
	name: string;
	icon: string;
};

type Timeline = {
	title: string;
	date: string;
	description: Array<string>;
};

const About: FC = ({}) => {
	const [skills, setSkills] = useState<Array<Skill>>();
	const [timeline, setTimeline] = useState<Array<Timeline>>();
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const listItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	useEffect(() => {
		fetch(
			'https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/skills?select=name%2Cicon',
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
				setSkills(data);
			});
		fetch(
			'https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/timeline?select=title,date,description',
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
				setTimeline(data);
			});
	}, []);

	return (
		<>
			<motion.main
				className='mx-4 md:mx-12 py-6'
				initial={{
					opacity: 0,
					x: 100,
				}}
				animate={{
					opacity: 1,
					x: 0,
				}}
				transition={{ duration: 0.5 }}>
				<h1 className='mx-auto text-4xl md:text-7xl my-7 text-center'>
					About me
				</h1>
				<article className='flex flex-wrap'>
					<p className='my-8 text-xl md:w-1/2 leading-loose tracking-widest'>
						Hi, I'm <strong>Danial Aiman Jamil</strong>. I'm a self-taught
						programmer from{' '}
						<Icon
							className='inline-block text-center mr-2'
							icon='twemoji:flag-malaysia'
						/>
						<strong>Malaysia</strong>. I'm currently{' '}
						<strong>open for hire and available for freelance</strong>. I'm a
						full-stack developer with a passion for learning new technologies.
						I'm currently learning <strong>Rust</strong> and{' '}
						<strong>Laravel</strong>. I'm also interested in{' '}
						<strong>UI/UX design</strong>. I'm currently working on{' '}
						<strong>my portfolio and personal blog</strong>.
					</p>
					<div className='text-xl text-left flex flex-col justify-around md:my-8'>
						<p>
							<strong>Contact information: </strong>
							<span className='text-base inline-block text-gray-500'>
								{'(Clickable)'}
							</span>{' '}
						</p>
						<div>
							<Icon
								className='inline-block mr-2 '
								width={20}
								height={20}
								icon='mdi:phone'
							/>{' '}
							<a href='tel:+601110165333'>+60 11 1016 5333</a> <br />
						</div>
						<div>
							<Icon
								className='inline-block mr-2'
								width={20}
								height={20}
								icon='mdi:email'
							/>{' '}
							<a href='mailto:danial.aiman.j@gmail.com'>
								danial.aiman.j@gmail.com
							</a>{' '}
							<br />
						</div>
						<div>
							<Icon className='inline-block mr-2' icon='mdi:linkedin' />{' '}
							<a href='https://www.linkedin.com/in/danial-aiman-jamil-a71727155/'>
								Danial Aiman Jamil
							</a>{' '}
							<br />
						</div>
						<div>
							<Icon className='inline-block mr-2' icon='mdi:twitter' />{' '}
							<a href='https://twitter.com/DevDAJ'>@DevDAJ</a>
						</div>
						<div>
							<Icon className='inline-block mr-2' icon='mdi:facebook' />{' '}
							<a href='https://www.facebook.com/danial.aiman.jamil'>
								Danial Aiman Jamil
							</a>
						</div>
						<div>
							<Icon className='inline-block mr-2' icon='mdi:github' />{' '}
							<a href='https://github.com/DevDAJ'>DevDAJ</a>
						</div>
					</div>
				</article>

				<ul>
					<li></li>
				</ul>
			</motion.main>
			<section className='flex flex-col items-center m-4 md:m-12'>
				<h2 className='mx-auto text-4xl md:text-7xl mb-4'>My journey</h2>
				<VerticalTimeline>
					{timeline?.map((item, index) => {
						return (
							<VerticalTimelineElement
								key={index}
								className='vertical-timeline-element--work'
								contentStyle={{ background: 'transparent', color: '#fff' }}
								contentArrowStyle={{ borderRight: '7px solid gray' }}
								date={item.date}
								iconStyle={{ background: 'white', color: '#fff' }}>
								<h3 className='vertical-timeline-element-title text-xl'>
									<strong>{item.title}</strong>
								</h3>
								<ul className='list-outside'>
									{item.description.map((desc, index) => {
										return (
											<li key={index} className='list-disc'>
												{desc}
											</li>
										);
									})}
								</ul>
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</section>
			<motion.section
				className='flex flex-col items-center md:mx-12'
				initial={{
					opacity: 0,
					y: 100,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{ duration: 0.5 }}>
				<h2 className='mx-auto text-4xl md:text-7xl mb-4'>My skills</h2>
				<div className='flex flex-col items-center'>
					<motion.div
						className='flex flex-row flex-wrap justify-center'
						variants={container}
						initial='hidden'
						whileInView='show'>
						{skills?.map((skill, index) => {
							return (
								<motion.div
									key={index}
									variants={listItem}
									className='flex flex-col items-center m-4 relative after:absolute after:text-transparent after:content-["asa"] after:aspect-square after:bg-[rgba(125,18,255,1)] after:top-4 after:-z-50 after:blur-2xl'>
									<Icon
										className='stroke-current '
										width={70}
										height={70}
										color='#fff'
										icon={`logos:${skill['icon']}`}
									/>
									<p className='text-xl first-letter:uppercase'>
										{skill['name']}
									</p>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</motion.section>
		</>
	);
};

export default About;
