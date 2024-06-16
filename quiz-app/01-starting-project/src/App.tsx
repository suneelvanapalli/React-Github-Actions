import Header from './components/Header';
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import QUESTIONS_AUS from './assets/questions_Australia';
import QUESTIONS_beyblade from './assets/questions_beyblade';
import questions_space from './assets/questions_space';
import questions_english from './assets/questions_english';

import { Card } from '@mui/material';

export default function StandardImageList() {
  const [displayQuiz, setDisplayQuiz] = useState<boolean>(false);
  const [questions, setQuestions] = useState<
    | {
        id: string;
        text: string;
        answers: string[];
      }[]
    | null
  >(null);

  function displayDashboard() {
    return (
      <ImageList sx={{ width: 1000, height: 1000 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <Card onClick={() => onSelection(item.title)}>{item.title}</Card>
        ))}
      </ImageList>
    );
  }

  function onSelection(selectedTopic) {
    if (selectedTopic === 'Space') {
      setQuestions(questions_space);
    } else if (selectedTopic === 'Bey Blade') {
      setQuestions(QUESTIONS_beyblade);
    } else if (selectedTopic === 'Australia') {
      setQuestions(QUESTIONS_AUS);
    } else if (selectedTopic === 'English') {
      setQuestions(questions_english);
    }
    setDisplayQuiz(true);
  }

  return (
    <>
      <h3>Hello Suhas! Please pick a topic for the quiz! </h3>
      {displayQuiz ? <Quiz QUESTIONS={questions}></Quiz> : displayDashboard()}
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Space',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Bey Blade',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Australia',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'English',
  },
];
