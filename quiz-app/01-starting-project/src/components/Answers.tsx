import { useEffect, useState } from 'react';

export default function Answers(
  { answers,
    selectedAnswer,
    answerState,
    onSelect }
) {
  return (
    <ul id='answers'>
      {answers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        return (
          <li key={answer} className='answer'>
            <button
              onClick={() => {
                onSelect(answer);
              }}
              className={isSelected ? answerState : ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
