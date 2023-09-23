import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import headers from '../plugins/headers';
interface TPost {
	id: number;
	title: string;
	content_text: string;
	date: string;
}

function Blog() {
	const [posts, setPosts] = useState<Array<TPost>>([]);
	useEffect(() => {
		axios.get<TPost[]>('https://qhxdiysxdygclcgzwwnu.supabase.co/rest/v1/post', {
			headers,
			params: {
				select: ('id,title,content_text,date')
			}
		})
			.then(({data}) => setPosts(data));
	}, []);
	return (
		<div className='mx-12'>
			{posts.map((post) => (
				<Link
					to={`/blog/${post['id']}`}
					key={post['id']}
					className='relative flex flex-wrap md:flex-nowrap flex-row border-y-2 py-3 my-2 rounded-md border-gray-700 justify-start items-center gap-2'>
					<div className='px-3 w-[clamp(200px,90%,1028px)]'>
						<h2 className='text-3xl'>
							<strong>{post['title']}</strong>
						</h2> posted on {post['date']}
						<div className='text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap  '>
							{post['content_text']}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Blog;
