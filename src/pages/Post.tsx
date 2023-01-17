import { useParams } from 'react-router-dom';
import { db } from '../plugins/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
export default function Post() {
	let { slug } = useParams();
	const [content, setContent] = useState('');

	const fetchPost = async () => {
		await getDocs(collection(db, 'posts')).then((snapshot) => {
			// only get post where slug matches
			let data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			data = data.filter((post: any) => post['slug'] === slug);
			setContent(data[0]['content'].replace(/%nl%/g, '\n'));
		});
	};
	useEffect(() => {
		fetchPost();
	}, []);
	return (
		<>
			{content ? (
				<>
					<Link to={`/blog`}>Back</Link>
					<div className='content'>
						<ReactMarkdown>{content}</ReactMarkdown>
					</div>
				</>
			) : (
				<div>404</div>
			)}
		</>
	);
}
