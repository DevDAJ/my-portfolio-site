// @ts-nocheck
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

export default function Post() {
	let { slug } = useParams();
	return (
		<>
			{slug ? (
				<>
					<Link to={`/blog`}>Back</Link>
					<div className='content'>
						<ReactMarkdown></ReactMarkdown>
					</div>
				</>
			) : (
				<div>404</div>
			)}
		</>
	);
}
