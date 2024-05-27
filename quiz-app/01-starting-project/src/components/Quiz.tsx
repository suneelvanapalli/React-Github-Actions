import { useState } from 'react';
import questions from '../assets/questions';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  let activeQuestionIndex = userAnswers.length;
  let selectUserAnswer = (selectedAnswer) => {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  };

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {questions[activeQuestionIndex].answers.map((answer) => {
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