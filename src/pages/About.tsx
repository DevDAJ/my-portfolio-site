import { FC } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const About: FC = ({}) => {
	return (
		<>
			<h1 className='mx-auto text-7xl mb-4'>My journey</h1>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid gray' }}
					date='2012 - 2014'
					iconStyle={{ background: 'white', color: '#fff' }}>
					<h3 className='vertical-timeline-element-title text-xl'>
						<strong>Start to programming</strong>
					</h3>
					<p>
						When I was 11, I was interested in creating a unique Minecraft
						server. Due to that I started learning Java programming to make
						plugins for Bukkit.
						<br />
						<br />
						The server was a failure but the effort was worth it, I managed to
						gain a great connections of people. I also learned how to use Linux
						and how to setup a VPS.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid gray' }}
					date='2015 - 2018'
					iconStyle={{ background: 'white', color: '#fff' }}>
					<h3 className='vertical-timeline-element-title text-xl'>
						<strong>Halt due to school</strong>
					</h3>
					<p>
						My programming journey halted due to highschool. I was in a boarding
						school and I had to focus on my studies. I was still interested in
						programming but I didn't have the time and device to do it.
						<br />
						<br />I did however joined a programming club in my school where I
						learned how to use Arduino, C++ and Python. I also managed to learn
						some basic HTML, CSS and PHP due to learning Laravel.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid gray' }}
					date='2019 - 2020'
					iconStyle={{ background: 'white', color: '#fff' }}>
					<h3 className='vertical-timeline-element-title text-xl'>
						<strong>Starting to learn more programming languages</strong>
					</h3>
					<p>
						After I graduated from highschool, I started to learn more
						programming languages. I started to learn JavaScript, Dart and
						Rustlang. I was looking at how to make mobile apps and websites.
						<br />
						<br />
						Rust came to me when I was looking for a language that is fast and
						safe to use. I was also looking for a language that is easy to
						learn. I found Rustlang and I was amazed by how easy it is to learn
						and how fast it is.
						<br />
						<br />I also started to learn how to use React and Flutter. As much
						as I like Rustlang, I still prefer to use React for web development.
						<br />
						<br />I had some classes in college on Computer Science and I
						learned about data structures and algorithms. I also learned how to
						use Java and C.
					</p>
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
							Serious pursuit toward becoming a Software Developer
						</strong>
					</h3>
					<p>
						I joined Google Developer Student Club in my university where they
						share any CS related events. I joined a few hackathons and I learned
						a lot from them.
						<br />
						<br />
						By November 2022, I got my first podium in a hackathon. I was amazed
						by how much I learned in just a few months. I also learned a few
						other frameworks such as Vue and Svelte.
						<br />
						<br />I took CS50 from edX . It was a great introduction to Computer
						Science. Even though I already knew a lot of the topics, I still
						learned a lot from it. The most important thing I learned from it is
						that I should always learn new things.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</>
	);
};

export default About;
