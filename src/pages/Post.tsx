// @ts-nocheck
import { useParams,Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import headers from '../plugins/headers';
import { useEffect, useState } from 'react';

interface TPost {
	id: number;
	title: string;
	content_text: string;
	content_markdown: string;
	date: string;
}

export default function Post() {
	let { id } = useParams();
	const [posts, setPosts] = useState<TPost>();
	useEffect(() => {
		axios.get<TPost>('https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/post', {
			headers,
			params: {
				select: 'title,content_markdown,date',
				id: `eq.${id ?? 0}`,
			}
		})
			.then(({data}) => 
			setPosts(data[0]))
	}, []);
	return (
		<>
			{posts ? (
				<>
					<Link to={`/blog`}>Back</Link>
					<div className='content'>
						<h1 className='title'>{posts['title']}</h1>
						<p className='date'>written by Danial Aiman Jamil on { posts['date']}</p>
						<ReactMarkdown>
							{posts['content_markdown']}
						</ReactMarkdown>
					</div>
				</>
			) : (
				<div>404</div>
			)}
		</>
	);
}
