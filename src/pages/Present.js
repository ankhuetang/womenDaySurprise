import React, { useReducer, useState } from 'react';
import './Present.css';

import Heart from '../images/heart-svgrepo-com.svg';
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from './confetti/Confetti';

const init_state = {
	move: 'move',
	jump: '',
	rotated: '',
	rotating: '',
};

const Present = () => {
	const [reveal, setReveal] = useState(false);
	const [state, setState] = useReducer(
		(state, new_state) => ({
			...state,
			...new_state,
		}),
		init_state
	);

	const handleClick = () => {
		setReveal(true);
	};

	const { move, rotating, rotated, jump } = state;

	function animate() {
		let isDone = rotated === 'rotated' ? true : false;

		if (!isDone) {
			setState({ rotating: 'rotating' });
			setTimeout(() => {
				setState({ jump: 'jump' });
			}, 300);
			setTimeout(() => {
				setState({ rotated: 'rotated' });
			}, 1000);
		} else {
			setState(init_state);
		}
		let moving = move === 'move' ? '' : 'move';
		setState({ move: moving });
	}

	return (
		<div className='present-bg d-flex flex-column align-items-center'>
			<h1 className='title'>Đến giờ nhận quà ròiiii</h1>
			{reveal ? (
				<div>
					<img src={Heart} className='heart-end' />
					<p className='present-text'>
						Xin chúc mừng paypi đã vượt qua series thử thách! <br /> Sau đây là
						combo 8.3 dành cho em!! <br /> <br />
						1. Mát xa tẩm quất đèn mờ by me <br />
						2. Một ảnh lóng 6 múi của tôi <br /> 3. Một chiếc áo khoác bò em
						thích <br />
						4. Một ngàn lụ hônn
					</p>
				</div>
			) : (
				<>
					{jump === 'jump' && (
						<h2 className='sub-title'>
							Không ngon ăn thế đâu...Đố em bắt dc con này
						</h2>
					)}
					<Confetti open={jump === 'jump'} />
					<div className='img-container'>
						<img
							className={`kuku ${jump}`}
							src='https://res.cloudinary.com/dweffaoxw/image/upload/v1709833577/jump-character_mfe3nm.png'
							alt='kuku'
							onClick={handleClick}
						/>

						<button className='box' onClick={() => animate()}>
							<img
								src='https://res.cloudinary.com/dweffaoxw/image/upload/v1709833424/box_pwfnlr.png'
								alt='box'
							/>
						</button>
						<img
							className={`lid ${move} ${rotating} ${rotated}`}
							src='https://res.cloudinary.com/dweffaoxw/image/upload/v1709833431/box-lid_xuxsca.png'
							alt='box-lid'
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Present;
