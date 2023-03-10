import { Link } from 'react-router-dom';
const posts = [
	{
		id: 1,
		title: 'Hello World',
		slug: 'hello-world',
		contentText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
];
function Blog() {
	return (
		<div className='mx-12'>
			{posts.map((post) => (
				<Link
					to={`/blog/${post['slug']}`}
					key={post['id']}
					className='relative flex flex-wrap md:flex-nowrap flex-row border-y-2 py-3 my-2 rounded-md border-gray-700 justify-start items-center gap-2'>
					<div className='px-3 w-[clamp(200px,90%,1028px)]'>
						<h2 className='text-3xl'>
							<strong>{post['title']}</strong>
						</h2>
						<div className='text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap  '>
							{post['contentText']}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default Blog;
