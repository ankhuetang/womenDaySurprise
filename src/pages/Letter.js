import React from 'react';
import { Link } from 'react-router-dom';
import letterSvg from '../images/letter.svg';
import { motion } from 'framer-motion';

import './Letter.css';

const Letter = () => {
	return (
		<div className='container-fluid letter-bg'>
			<div className='row justify-content-center align-items-end head-row'>
				<h1 className='letter-title'>
					Wake up baby I have something for you!!
				</h1>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				whileHover={{
					rotate: [-5, 5, -5, 5, -5, 0],
					transition: { duration: 1.5, repeat: Infinity },
				}}
				className='row letter-row justify-content-center align-items-center'
			>
				<Link to='/letter' className='link-svg'>
					<img src={letterSvg} alt='letter pic' className='letter-svg' />
				</Link>
			</motion.div>
		</div>
	);
};

export default Letter;
