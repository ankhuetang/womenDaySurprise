import React from 'react';

import { Link } from 'react-router-dom';
import letter_opened_svg from '../images/love-letter.svg';
import './Letter-opened.css';

const LetterOpened = () => {
	return (
		<div className='container-fluid letter-opened-bg'>
			<Link
				to='/getready'
				className='d-flex justify-content-center align-items-center letter-opened-link'
			>
				<img
					src={letter_opened_svg}
					alt='love letter'
					className='letter-opened-svg'
				/>
			</Link>
		</div>
	);
};

export default LetterOpened;
