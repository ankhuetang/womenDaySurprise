import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Flower from '../images/flower-svgrepo-com.svg';
import './Quiz.css';

const questions = [
	{
		id: 1,
		question:
			'Món ăn nào cả hai bọn mình cùng thích nhất và sẽ ăn mừng ngày 8.3?',
		choices: [
			'Phở nạm gầu & Cafe sữa đá',
			'Fine Dinning at Cranes in DC',
			'Đụ cả ngày khỏi ăn',
		],
		correctAnswer: 'Phở nạm gầu & Cafe sữa đá',
	},
	{
		id: 2,
		question: 'Màu anh thích nhất là màu gì?',
		choices: ['Màu nắng', 'Màu mắt em', 'Màu xanh LinkedIn'],
		correctAnswer: 'Màu mắt em',
	},
	{
		id: 3,
		question:
			'Hoàn thành câu hát: "Vợ anh ......, vợ anh đẹp, vợ anh put it in the bag"',
		choices: ['chân ngắn kiêu sa', 'hiền dịu nết na gọi dạ bảo vâng', 'nhất'],
		correctAnswer: 'hiền dịu nết na gọi dạ bảo vâng',
	},
];

//
const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [endGame, setEndGame] = useState(false);
	const [correct, setCorrect] = useState(true);
	const [congrats, setCongrats] = useState(false);

	const handleAnswerClick = (choice) => {
		if (choice !== questions[currentQuestion].correctAnswer) {
			setCorrect(false);
		}
		if (choice === questions[currentQuestion].correctAnswer) {
			setCorrect(true);
			setCongrats(true);
			setTimeout(() => {
				if (currentQuestion < questions.length - 1) {
					setCurrentQuestion(currentQuestion + 1);
					setCongrats(false);
				} else {
					setEndGame(true);
				}
			}, 1500);
		}
	};

	return (
		<div className='quiz-bg'>
			{endGame ? (
				<div
					className='d-flex flex-column justify-content-center align-items-center 
        result-section'
				>
					<h3>A đùa thui em muốn gì cũng được hết</h3>
					<Link to='/quachoem'>
						<button className='custom-button'>Last surprise for nhiuu</button>
					</Link>
				</div>
			) : (
				<div className='question-wrapper container-fluid'>
					<div className='row question-section justify-content-center align-items-center'>
						<div>
							<h3>Câu hỏi thứ {currentQuestion + 1}</h3>
							<h3>{questions[currentQuestion].question}</h3>
						</div>
					</div>
					<div className='warning-section'>
						{!correct && <h4>Em nghĩ thêm đi gần đúng rùi cố lên!</h4>}
						{congrats && <h4>Paypi giỏi quá xalangheee</h4>}
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].choices.map((choice, index) => (
							<button
								className='custom-button m-4'
								key={index}
								onClick={() => handleAnswerClick(choice)}
							>
								{choice}
							</button>
						))}
					</div>
					<div className='d-flex justify-content-center align-items-center flower-section'>
						<img src={Flower} alt='flower svg' className='flower-svg' />
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
