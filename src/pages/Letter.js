import React from 'react';
import { Link } from 'react-router-dom';
import letterSvg from '../images/letter.svg';

import './Letter.css';

const Letter = () => {
	return (
		<div className='container-fluid letter-bg'>
			<div className='row justify-content-center align-items-end head-row'>
				<h1>Wake up baby I have something for you!!</h1>
			</div>
			<div className='row letter-row justify-content-center align-items-center'>
				<Link to='/letter' className='link-svg'>
					<img src={letterSvg} alt='letter pic' className='letter-svg' />
				</Link>
			</div>
		</div>
	);
};

export default Letter;
