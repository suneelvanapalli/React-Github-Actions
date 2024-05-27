import { useCallback, useEffect, useRef, useState } from 'react';
import questions from '../assets/questions';
import quizCompletedImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  let activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const shuffledAnswers = questions[activeQuestionIndex].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const quizIsComplete = activeQuestionIndex === questions.length;

  let handleUserAnswer = useCallback(
    function handleUserAnswer(selectedAnswer) {
      setAnswerState('selected');
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 2000);
    },
    [activeQuestionIndex]
  );

  let handleNullAnswerSelection = useCallback(() => {
    handleUserAnswer(null);
  }, [handleUserAnswer]);

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompletedImg} alt='trophy-icon'></img>
        <h2>Quiz is completed!</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOutComplete={handleNullAnswerSelection}
        ></QuestionTimer>
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            return (
              <li key={answer} className='answer'>
                <button
                  onClick={() => {
                    handleUserAnswer(answer);
                  }}
                  className={isSelected ? answerState : ''}
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
