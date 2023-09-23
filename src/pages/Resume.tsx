import { motion } from 'framer-motion';
import { FC, useRef } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import {saveAs} from 'file-saver'
import { usePdf } from '@mikecousins/react-pdf';
import resume from '../assets/resume.pdf'

const About: FC = () => {
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: resume,
    canvasRef,
  });
	return (
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
					Resume
				</h1>
				<div className='w-auto flex justify-center'>
				<button onClick={()=>saveAs(resume, 'Danial_Aiman_Jamil_resume.pdf')}  className='text-center glow font-bold drop-shadow-lg text-ascent'>
					Click to download
				</button>
				</div>
				<canvas ref={canvasRef} className='mx-auto text-3xl md:text-6xl my-7 '/>
			</motion.main>
	);
};

export default About;
