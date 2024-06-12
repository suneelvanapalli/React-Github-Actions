import { useCallback, useEffect, useRef, useState } from 'react';
import questions from '../assets/questions';
import quizCompletedImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import Question from './Question';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  let activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

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
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        questionText={questions[activeQuestionIndex].text}
        answers={questions[activeQuestionIndex].answers}
        onSelectAnswer={handleUserAnswer}
        onNullAnswerSelection={handleNullAnswerSelection}
      ></Question>
    </div>
  );
}

// test
