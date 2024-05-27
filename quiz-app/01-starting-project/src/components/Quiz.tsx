import { useState } from 'react';
import questions from '../assets/questions';
import quizCompletedImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  let activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

  let selectUserAnswer = (selectedAnswer) => {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  };

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompletedImg} alt='trophy-icon'></img>
        <h2>Quiz is completed!</h2>
      </div>
    );
  }

  // shuffle answers
  const shuffledAnswers = questions[activeQuestionIndex].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          timeout={10000}
          onTimeOutComplete={() => {
            selectUserAnswer(null);
          }}
        ></QuestionTimer>
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => {
            return (
              <li className='answer'>
                <button
                  onClick={() => {
                    selectUserAnswer(answer);
                  }}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// test
