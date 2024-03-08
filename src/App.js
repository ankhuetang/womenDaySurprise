import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Letter from './pages/Letter.js';
import LetterOpened from './pages/LetterOpened.js';
import Makeup from './pages/Makeup.js';
import Tinder from './pages/Tinder.js';
import Present from './pages/Present.js';
import Quiz from './pages/Quiz.js';

import soundtrack from './sounds/jazz.mp3';

function App() {
	const [audio] = useState(new Audio(soundtrack));
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlay = () => {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.loop = true;
			audio.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className='App'>
			<button className='app-button' onClick={togglePlay}>
				{isPlaying ? 'Pause' : 'Romance'}
			</button>
			<Router>
				<Routes>
					<Route exact path='/' element={<Letter />} />
					<Route path='/letter' element={<LetterOpened />} />
					<Route path='/getready' element={<Makeup />} />
					<Route path='/tindertime' element={<Tinder />} />
					<Route path='/quachoem' element={<Present />} />
					<Route path='/dovuicothuong' element={<Quiz />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
