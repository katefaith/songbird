import React, {useState} from 'react';

import Header from '../header/header';
import Question from '../question/question';
import Answers from '../answers/answers';
import ButtonNext from '../button-next/button-next';

import birdsData from '../../birds-data';

import './app.scss';

const App = () => {
  const [level, setLevel] = useState(0);
  const [levelScore, setLevelScore] = useState(5);
  const [score, setScore] = useState(0);
  const randomIndex = Math.floor(Math.random() * Math.floor(6));
  const [questionBird, setQuestionBird] = useState(birdsData[level][randomIndex]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);
  const [needRerender, setNeedRerender] = useState(false);

  return (
    <div className="app">
      <Header
        level={level}
        score={score}/>
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
          setIsCorrectAnswer={setIsCorrectAnswer}
          levelScore={levelScore}
          setLevelScore={setLevelScore}
          score={score}
          setScore={setScore}
          needRerender={needRerender}
          level={level}
          setNeedRerender={setNeedRerender}/>

        <ButtonNext
          isCorrectAnswer={isCorrectAnswer}
          setIsCorrectAnswer={setIsCorrectAnswer}
          level={level}
          setLevel={setLevel}
          setQuestionBird={setQuestionBird}
          birdsData={birdsData}
          setSelectedBird={setSelectedBird}
          setLevelScore={setLevelScore}
          setNeedRerender={setNeedRerender} />
      </main>
    </div>
  );
}

export default App;
