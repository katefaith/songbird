import React, {useState} from 'react';

import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import ButtonNext from '../button-next/button-next';

import birdsData from '../../birds-data';

import './app.scss';

const App = () => {
  const level = 0;
  const randomIndex = Math.floor(Math.random() * Math.floor(6));
  const [questionBird, setQuestionBird] = useState(birdsData[level][randomIndex]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);

  return (
    <div className="app">
      <Header />
      <main>
        <Question
          isCorrectAnswer={isCorrectAnswer}
          questionBird={questionBird} />
        <Answers
          birdsList={birdsData[level]}
          selectedBird={selectedBird}
          setSelectedBird={setSelectedBird}
          questionBird={questionBird}
          isCorrectAnswer={isCorrectAnswer}
          setIsCorrectAnswer={setIsCorrectAnswer} />
        <ButtonNext />
      </main>
    </div>
  );
}

export default App;
