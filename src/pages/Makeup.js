import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import makeup_svg from '../images/makeup-brush.svg';

import './Makeup.css';

const Makeup = () => {
	const [clicked, setClicked] = useState(false);
	const [clickCount, setClickCount] = useState(0);
	const [showNewImage, setShowNewImage] = useState(false);

	useEffect(() => {
		if (clickCount >= 10) {
			setShowNewImage(true);
		}
	}, [clickCount]);

	const handleClickHeart = () => {
		setClickCount(clickCount + 1);
		setClicked(!clicked);
	};

	return (
		<>
			<div className='makeup-bg'>
				<div className='row container-fluid align-items-end height-20'>
					{showNewImage ? (
						<h1>Xinh ngất rồii</h1>
					) : (
						<h1>Tỉnh dậy thôi đến giờ xinh đẹp rồiii</h1>
					)}
				</div>
				<div className='row container-fluid height-80 custom-cursor'>
					<div className='col-md-3 d-flex align-items-center justify-content-center'>
						Chao buoi sang, tinh yeu, moi ngu day nen dau toc hoi roi boi nhi
					</div>
					<div
						className={`col-md-6 d-flex align-items-center justify-content-center heart-container`}
					>
						{showNewImage ? (
							<Link to='/tindertime'>
								<img
									src='https://res.cloudinary.com/dweffaoxw/image/upload/v1709762116/image_2_gx1mrt.png'
									alt='pretty pic'
									className='heart-img'
								/>
							</Link>
						) : (
							<img
								src='https://res.cloudinary.com/dweffaoxw/image/upload/v1709778817/image_3_onzqv8.png'
								alt='sleepy pic'
								className={`heart-img ${!clicked ? '' : 'heart-img-click'}`}
								onClick={handleClickHeart}
							/>
						)}
					</div>
					<div className='col-md-3 d-flex align-items-center justify-content-center'>
						Minh trang diem mot chut nhe, a chuẩn bị phấn má cho e dặm rùi này.
						<br /> **dặm kĩ 10 phát mới được nha
					</div>
				</div>
			</div>
		</>
	);
};

export default Makeup;
