import React, { useState, useRef, useMemo } from 'react';

import { Link } from 'react-router-dom';
import TinderCard from 'react-tinder-card';

import './Tinder.css';

const db = [
	{
		name: 'Boy Spring yêu em đắm say',
		url: 'https://res.cloudinary.com/dweffaoxw/image/upload/v1709779336/IMG_7930_haqefk.jpg',
	},
	{
		name: 'Boy sexy summer Pinacolada',
		url: 'https://res.cloudinary.com/dweffaoxw/image/upload/v1709779337/IMG_8383_enxhjb.jpg',
	},
	{
		name: 'Boy công sở thành đạt nuôi em',
		url: 'https://res.cloudinary.com/dweffaoxw/image/upload/v1709779337/IMG_5861_hrn3hu.jpg',
	},
	{
		name: 'Boy 6 múi grey pants chym to',
		url: 'https://res.cloudinary.com/dweffaoxw/image/upload/v1709779336/IMG_3682_qhlptb.jpg',
	},
	{
		name: 'Boy phong trần nghĩ suy về em mà rụng tóc',
		url: 'https://res.cloudinary.com/dweffaoxw/image/upload/v1709779335/IMG_4730_jxuqtd.jpg',
	},
	{
		name: 'Boy trai bao cổ tàu Punta Cana',
		url: 'https://res.cloudinary.com/dweffaoxw/image/upload/v1709779336/IMG_8219_qfgymn.jpg',
	},
];

const Tinder = () => {
	const [currentIndex, setCurrentIndex] = useState(db.length - 1);
	const [lastDirection, setLastDirection] = useState();
	// used for outOfFrame closure
	const currentIndexRef = useRef(currentIndex);

	const childRefs = useMemo(
		() =>
			Array(db.length)
				.fill(0)
				.map((i) => React.createRef()),
		[]
	);

	const updateCurrentIndex = (val) => {
		setCurrentIndex(val);
		currentIndexRef.current = val;
	};

	const canGoBack = currentIndex < db.length - 1;

	const canSwipe = currentIndex >= 0;

	// set last direction and decrease current index
	const swiped = (direction, nameToDelete, index) => {
		setLastDirection(direction);
		updateCurrentIndex(index - 1);
	};

	const outOfFrame = (name, idx) => {
		console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
		// handle the case in which go back is pressed before card goes outOfFrame
		currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
		// TODO: when quickly swipe and restore multiple times the same card,
		// it happens multiple outOfFrame events are queued and the card disappear
		// during latest swipes. Only the last outOfFrame event should be considered valid
	};

	const swipe = async (dir) => {
		if (canSwipe && currentIndex < db.length) {
			await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
		}
	};

	// increase current index and show card
	const goBack = async () => {
		if (!canGoBack) return;
		const newIndex = currentIndex + 1;
		updateCurrentIndex(newIndex);
		await childRefs[newIndex].current.restoreCard();
	};

	return (
		<div className='tinder-bg'>
			<div className='row container-fluid align-items-center height-20'>
				{canSwipe ? (
					<h1 className='tinder-title'>Pick your favorite bf for your date</h1>
				) : (
					<h1 className='tinder-title'>
						Đùa thôi tất cả các anh đẹp trai này sẽ là của em!!
					</h1>
				)}
			</div>
			<div className='row container-fluid justify-content-center align-items-center height-60 cardContainer'>
				{db.map((character, index) => (
					<TinderCard
						ref={childRefs[index]}
						className='swipe'
						key={character.name}
						onSwipe={(dir) => swiped(dir, character.name, index)}
						onCardLeftScreen={() => outOfFrame(character.name, index)}
					>
						<div
							style={{ backgroundImage: 'url(' + character.url + ')' }}
							className='card'
						>
							<h3>{character.name}</h3>
						</div>
					</TinderCard>
				))}
				{lastDirection ? (
					lastDirection === 'left' ? (
						<h2 key={lastDirection} className='infoText'>
							Ơ...cô chắc chưa??
						</h2>
					) : lastDirection === 'right' ? (
						<h2 key={lastDirection} className='infoText'>
							Cũng có gu đấy!!
						</h2>
					) : null
				) : (
					<h2 className='infoText'>Pick your bf!</h2>
				)}
				{!canSwipe && (
					<Link to='/dovuicothuong' className='next-button'>
						More surprises!!
					</Link>
				)}
			</div>
			<div className='row container-fluid justify-content-center align-items-center  buttons height-20'>
				<button
					style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
					onClick={() => swipe('left')}
				>
					Swipe left!
				</button>
				<button
					style={{ backgroundColor: !canGoBack && '#c3c4d3' }}
					onClick={() => goBack()}
				>
					Undo swipe!
				</button>
				<button
					style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
					onClick={() => swipe('right')}
				>
					Swipe right!
				</button>
			</div>
		</div>
	);
	// const characters = db;
	// const [lastDirection, setLastDirection] = useState();

	// const swiped = (direction, nameToDelete) => {
	// 	console.log('removing: ' + nameToDelete);
	// 	setLastDirection(direction);
	// };

	// const outOfFrame = (name) => {
	// 	console.log(name + ' left the screen!');
	// };

	// return (
	// 	<div className='tinder-bg'>
	// 		<div className='row container-fluid align-items-center height-20'>
	// 			<h1>Pick your favorite bf for your date</h1>
	// 		</div>
	// 		<div className='row container-fluid justify-content-center align-items-center height-80 cardContainer'>
	// 			{characters.map((character) => (
	// 				<TinderCard
	// 					className='swipe'
	// 					key={character.name}
	// 					onSwipe={(dir) => swiped(dir, character.name)}
	// 					onCardLeftScreen={() => outOfFrame(character.name)}
	// 				>
	// 					<div
	// 						style={{ backgroundImage: 'url(' + character.url + ')' }}
	// 						className='card'
	// 					>
	// 						<h3>{character.name}</h3>
	// 					</div>
	// 				</TinderCard>
	// 			))}
	// 		</div>
	// 		{lastDirection ? (
	// 			<h2 className='infoText'>You swiped {lastDirection}</h2>
	// 		) : (
	// 			<h2 className='infoText' />
	// 		)}
	// 	</div>
	// );
};

export default Tinder;
