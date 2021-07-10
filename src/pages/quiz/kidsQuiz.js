import React, { useState } from 'react';
import "./quiz.css"

export default function KidsQuiz() {
    const questions = [
        {
            questionText: 'Who is Spongebob’s best friend?',
            answerOptions: [
                { answerText: 'Mr Potato Head', isCorrect: false },
                { answerText: 'Patrick Star', isCorrect: true },
                { answerText: 'Olaf', isCorrect: false },
                { answerText: 'Flounder', isCorrect: false },
            ],
        },
        {
            questionText: 'In Aladdin, what is Jasmines tiger called?',
            answerOptions: [
                { answerText: 'Abu', isCorrect: false },
                { answerText: 'Iago', isCorrect: false },
                { answerText: 'Rajah', isCorrect: true },
                { answerText: 'Tony', isCorrect: false },
            ],
        },
        {
            questionText: 'Which Pixar film came out first?',
            answerOptions: [
                { answerText: 'The Incredibles', isCorrect: false },
                { answerText: 'A Bug’s Life', isCorrect: true },
                { answerText: 'Monsters, Inc.', isCorrect: false },
                { answerText: 'Coco', isCorrect: false },
            ],
        },
        {
            questionText: 'Where do Elsa and Anna live?',
            answerOptions: [
                { answerText: 'Winterfell', isCorrect: false },
                { answerText: 'Emmerdale', isCorrect: false },
                { answerText: 'Dardanelles', isCorrect: false },
                { answerText: 'Arendelle', isCorrect: true },
            ],
        },
        {
            questionText: 'What is Simba’s childhood best friend called in the Lion King?',
            answerOptions: [
                { answerText: 'Tala', isCorrect: false },
                { answerText: 'Nala', isCorrect: true },
                { answerText: 'Sala', isCorrect: false },
                { answerText: 'Mala', isCorrect: false },
            ],
        },
        {
            questionText: 'In the film Ratatouille, Remy the rat, was an excellent...',
            answerOptions: [
                { answerText: 'Pilot', isCorrect: false },
                { answerText: 'Sailor', isCorrect: false },
                { answerText: 'Chef', isCorrect: true },
                { answerText: 'Footballer', isCorrect: false },
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