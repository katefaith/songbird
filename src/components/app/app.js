import React, { useState, createRef } from 'react';

import Header from '../header/header';
import Question from '../question/question';
import AnswersList from '../answers-list/answers-list';
import Details from '../details/details';
import ButtonNext from '../button-next/button-next';
import Result from '../result/result';

import birdsData from '../../birds-data';

import './app.scss';

const App = () => {
  const [level, setLevel] = useState(0);
  const [levelScore, setLevelScore] = useState(5);
  const [score, setScore] = useState(0);
  const randomIndex = Math.floor(Math.random() * Math.floor(6));
  const [questionBird, setQuestionBird] = useState(birdsData[0][randomIndex]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);
  const [needRerender, setNeedRerender] = useState(false);
  const audioPlayer = createRef();
  const detailsAudioPlayer = createRef();

  console.log('questionBird', questionBird);

  return (
    <div className="app">
      <Header
        level={level}
        score={score} />


      <main>
        {(level > 5)
          ? <Result score={score} />
          : <>
            <Question
              isCorrectAnswer={isCorrectAnswer}
              questionBird={questionBird}
              audioPlayer={audioPlayer}
              detailsAudioPlayer={detailsAudioPlayer} />

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
                setNeedRerender={setNeedRerender}
                audioPlayer={audioPlayer} />
              <Details
                selectedBird={selectedBird}
                audioPlayer={audioPlayer}
                detailsAudioPlayer={detailsAudioPlayer} />
            </div>
          </>}

        <ButtonNext
          isCorrectAnswer={isCorrectAnswer}
          setIsCorrectAnswer={setIsCorrectAnswer}
          level={level}
          setLevel={setLevel}
          setScore={setScore}
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
