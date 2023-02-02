import { FC } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const About: FC = ({}) => {
	return (
		<div className='flex flex-col items-center mx-12'>
			<h1 className='mx-auto text-7xl mb-4'>My journey</h1>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid gray' }}
					date='2011'
					iconStyle={{ background: 'white', color: '#fff' }}>
					<h3 className='vertical-timeline-element-title text-xl'>
						<strong>Start of my programming journey</strong>
					</h3>
					<ul className='list-inside'>
						<li className='list-disc'>Learnt Java</li>
						<li className='list-disc'>
							Created Bukkit Plugins for Minecraft Server
						</li>
						<li className='list-disc'>Learnt how to use Linux </li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid gray' }}
					date='2015 - 2018'
					iconStyle={{ background: 'white', color: '#fff' }}>
					<h3 className='vertical-timeline-element-title text-xl'>
						<strong>Highschool</strong>
					</h3>
					<ul className='list-inside'>
						<li className='list-disc'>Joined robotics club</li>
						<li className='list-disc'>Learnt C++ and Python</li>
						<li className='list-disc'>Learnt HTML, CSS, and Bootstrap</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid gray' }}
					date='2019 - 2020'
					iconStyle={{ background: 'white', color: '#fff' }}>
					<h3 className='vertical-timeline-element-title text-xl'>
						<strong>University</strong>
					</h3>
					<ul className='list-inside'>
						<li className='list-disc'>
							Learnt JavaScript, Dart {'( Flutter )'} and Rustlang
						</li>
						<li className='list-disc'>Practiced on Frameworks</li>
						<li className='list-disc'>Formal education in Minor CS subjects</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid gray' }}
					date='2022 - 2023'
					iconStyle={{
						background: 'white',
						color: '#fff',
					}}>
					<h3 className='vertical-timeline-element-title text-xl'>
						<strong>
							Freelance Software Developer and Web Developer{' '}
							{'( While Studying )'}
						</strong>
					</h3>
					<ul className='list-inside'>
						<li className='list-disc'>Joined Google Developer Student Club</li>
						<li className='list-disc'>
							Joined hackathons, got a 3rd place once
						</li>
						<li className='list-disc'>Took CS50x</li>
					</ul>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default About;
