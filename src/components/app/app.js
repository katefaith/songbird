import React, {useState} from 'react';

import Header from '../header/header';
import Question from '../question/question';
import AnswersList from '../answers-list/answers-list';
import Details from '../details/details';
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

          <div className="answers">
            <AnswersList
              birdsList={birdsData[level]}
              questionBird={questionBird}
              isCorrectAnswer={isCorrectAnswer}
              setIsCorrectAnswer={setIsCorrectAnswer}
              setSelectedBird={setSelectedBird}
              levelScore={levelScore}
              setLevelScore={setLevelScore}
              score={score}
              setScore={setScore}
              needRerender={needRerender}
              setNeedRerender={setNeedRerender} />
            <Details selectedBird={selectedBird} />
          </div>

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
