import React from 'react';

import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import ButtonNext from '../button-next/button-next';

import birdsData from '../../birds-data';

import './app.scss';

const App = () => {
  const level = 0;
  const randomIndex = Math.floor(Math.random() * Math.floor(6));
  const questionBird = birdsData[level][randomIndex];
  const isCorrectAnswer = false;

  return (
    <div className="app">
      <Header />
      <main>
        <Question
          isCorrectAnswer={isCorrectAnswer}
          questionBird={questionBird} />
        <Answers birdsList={birdsData[level]} />
        <ButtonNext />
      </main>
    </div>
  );
}

export default App;
