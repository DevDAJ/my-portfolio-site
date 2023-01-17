import { db } from '../plugins/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

function Portfolio() {
	const [projects, setProjects] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchPost = async () => {
		await getDocs(collection(db, 'projects')).then((snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProjects(data);
			setLoading(false);
		});
	};
	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<div>
			{projects.map((project) => (
				<div
					key={project['id']}
					className='relative flex flex-wrap md:flex-nowrap flex-row border-y-2 py-3	 rounded-md border-gray-700 justify-center	 items-center gap-2'>
					<img
						alt={`${project['name']} image`}
						src={project['imgURL']}
						width='300'
						className='aspect-square object-contain'></img>
					<div className='px-3'>
						<h2 className='text-3xl'>
							<strong>{project['name']}</strong>
						</h2>
						<p className='text-gray-300 text-xl'>{project['type']}</p>
						<p className='text-gray-400'>{project['description']}</p>
						<div className='flex flex-wrap justify-between'>
							<div className='flex gap-2 flex-wrap'>
								{project['technologies'].map((tech: string) => (
									<div
										key={tech}
										className='border-2 rounded-md border-gray-700 px-3 text-sm'>{`${tech}`}</div>
								))}
							</div>
							<div className='flex gap-2 p-2'>
								{project['url'] ? (
									<a href={project['url']}>
										<Icon className='text-2xl' icon='material-symbols:link' />
									</a>
								) : null}

								{project['repo'] ? (
									<a href={project['repo']}>
										<Icon className='text-2xl' icon='mdi:github' />
									</a>
								) : null}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Portfolio;
