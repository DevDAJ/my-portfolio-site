import { Icon } from '@iconify/react';
import { FC, useState, useEffect } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import headers from '../plugins/headers';

type Skill = {
	name: string;
	icon: string;
};

type Timeline = {
	id: number;
	title: string;
	date: string;
	description: Array<string>;
};

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

const About: FC = () => {
	const [skills, setSkills] = useState<Array<Skill>>();
	const [timeline, setTimeline] = useState<Array<Timeline>>();
	useEffect(() => {
		fetch(
			'https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/skills?select=name%2Cicon',
			{
				method: 'GET',
				headers,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setSkills(data);
			});
		fetch(
			'https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/timeline?select=id,title,date,description',
			{
				method: 'GET',
				headers,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				const sorteddata = data.sort((a: Timeline, b: Timeline) => {
					return a.id - b.id;
				});
				setTimeline(sorteddata);
			});
	}, []);

	return (
		<>
			<motion.main
				className='mx-4 sm:mx-6 md:mx-12 py-6'
				initial={{
					opacity: 0,
					x: 100,
				}}
				animate={{
					opacity: 1,
					x: 0,
				}}
				transition={{ duration: 0.5 }}>
				<h1 className='mx-auto text-3xl md:text-6xl my-7 text-center glow font-bold drop-shadow-lg text-ascent'>
					About me
				</h1>
				<article className='flex flex-wrap'>
					<p className='my-8 text-lg leading-snug tracking-tight lg:w-3/5 sm:leading-relaxed sm:tracking-wider lg:leading-loose lg:tracking-widest'>
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
					<div className='text-lg text-left flex flex-col justify-around md:my-8'>
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
				<h2 className='mx-auto text-3xl md:text-6xl mb-4 glow font-bold drop-shadow-lg text-ascent'>
					My journey
				</h2>
				<VerticalTimeline>
					{timeline?.map((item, index) => {
						return (
							<VerticalTimelineElement
								key={`${item.id}-${index.toString()}`}
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
											<li key={`${desc}-${index.toString()}`}className='list-disc'>
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
				<h2 className='mx-auto text-3xl md:text-6xl mb-4 glow font-bold drop-shadow-lg text-ascent'>
					My skills
				</h2>
				<div className='flex flex-col items-center'>
					<motion.div
						className='flex flex-row flex-wrap justify-center'
						variants={container}
						initial='hidden'
						whileInView='show'>
						{skills?.map((skill, index) => {
							return (
								<motion.div
									key={`${skill['name']}-${index.toString()}`}
									variants={listItem}
									className='flex flex-col items-center m-4 relative after:absolute after:text-transparent
									 after:content-["asa"] after:aspect-square after:bg-[#721adf] after:top-4 after:-z-50 after:blur-xl'>
									<Icon
										className='stroke-current '
										width={50}
										height={50}
										color='#fff'
										icon={`logos:${skill['icon']}`}
									/>
									<p className=' first-letter:uppercase'>{skill['name']}</p>
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
