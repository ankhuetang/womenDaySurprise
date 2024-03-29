import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='row container-fluid align-items-end height-20 makeup-title'
				>
					{showNewImage ? (
						<motion.h1
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
						>
							Xinh ngất rồii, giờ đi săn giai thôi!
						</motion.h1>
					) : (
						<h1>Tỉnh dậy thôi đến giờ xinh đẹp rồiii</h1>
					)}
				</motion.div>
				<div className='row container-fluid height-80 custom-cursor'>
					<motion.div
						whileHover={{
							rotate: [-2, 2, -2, 2, -2, 0],
							transition: { duration: 1.5, repeat: Infinity },
						}}
						className='col-md-3 d-flex align-items-center justify-content-center makeup-text'
					>
						Chào buổi sáng tình yêu, mới ngủ dậy nên đầu tóc hơi rối bời nhỉ
					</motion.div>
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
					<motion.div
						whileHover={{
							rotate: [-2, 2, -2, 2, -2, 0],
							transition: { duration: 1.5, repeat: Infinity },
						}}
						className='col-md-3 d-flex align-items-center justify-content-center makeup-text'
					>
						Mình trang điểm một chút nhé, anh chuẩn bị phấn má cho em dặm rồi
						này.
						<br /> **dặm kĩ 10 phát mới được nha
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Makeup;
