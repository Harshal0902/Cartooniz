import React, { useState } from 'react';
import "./quiz.css"

export default function AdultQuiz() {
    const questions = [
        {
            questionText: 'In which one of the following year comic strips were invented?',
            answerOptions: [
                { answerText: '1810s', isCorrect: false },
                { answerText: '1820s', isCorrect: true },
                { answerText: '1830s', isCorrect: false },
                { answerText: '1840s', isCorrect: false },
            ],
        },
        {
            questionText: 'In which one of the following country comic strips were discovered?',
            answerOptions: [
                { answerText: 'England', isCorrect: false },
                { answerText: 'Germany', isCorrect: false },
                { answerText: 'Switzerland', isCorrect: true },
                { answerText: 'France', isCorrect: false },
            ],
        },
        {
            questionText: 'In "Batman v Superman," Diana Prince and Bruce Wayne meet while gazing at what ancient weapon?',
            answerOptions: [
                { answerText: 'Staff of Amun-Ra', isCorrect: false },
                { answerText: 'Sword of Alexander the Great', isCorrect: true },
                { answerText: 'Seven-Branched Sword', isCorrect: false },
                { answerText: 'Sword of Mercy', isCorrect: false },
            ],
        },
        {
            questionText: 'What legendary superhero shocked DC Comics fans by announcing his allegiance to Hydra?',
            answerOptions: [
                { answerText: 'Iron Man', isCorrect: false },
                { answerText: 'Black Widow', isCorrect: false },
                { answerText: 'Hulk', isCorrect: false },
                { answerText: 'Captain America', isCorrect: true },
            ],
        },
        {
            questionText: 'A girl searches for magical objects to fulfill her wish, which is the anime?',
            answerOptions: [
                { answerText: 'One Piece', isCorrect: false },
                { answerText: 'Dragon Ball', isCorrect: true },
                { answerText: 'Fairy tail', isCorrect: false },
                { answerText: 'Naruto', isCorrect: false },
            ],
        },
        {
            questionText: 'What kind of wizard is Lucy in “Fairy Tail” anime?',
            answerOptions: [
                { answerText: 'Ice Wizard', isCorrect: false },
                { answerText: 'Sky Wizard', isCorrect: false },
                { answerText: 'Celestial Wizard', isCorrect: true },
                { answerText: 'Fire Wizard', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following characters does the “Gum-Gum Pistol” attack belong to?',
            answerOptions: [
                { answerText: 'Black Butler', isCorrect: false },
                { answerText: 'Chobits', isCorrect: false },
                { answerText: 'Titan', isCorrect: false },
                { answerText: 'Monkey D. Luffy', isCorrect: true },
            ],
        }
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className="quizBody">
            <div className='quiz'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}