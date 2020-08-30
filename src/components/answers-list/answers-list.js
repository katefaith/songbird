import React, { useState, useEffect } from 'react';

import './answers-list.scss';

import correct from './audio/correct.mp3';
import error from './audio/error.mp3';

const classes = new Array(6);
classes.fill("answers-list__indicator");

const AnswersList = (props) => {
  const {
    birdsList,
    questionBird,
    isCorrectAnswer,
    setIsCorrectAnswer,
    setSelectedBird,
    levelScore,
    setLevelScore,
    score,
    setScore,
    setNeedRerender,
    needRerender,
    audioPlayer
  } = props;

  const [classesForIndicatores, setClassesForIndicators] = useState(classes);

  useEffect(() => {
    if (needRerender) {
      setClassesForIndicators(classes);
      setNeedRerender(false);
    }
  }, [needRerender, setNeedRerender]);

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  }

  const checkAnswer = (bird) => {
    setSelectedBird(bird);
    if (!isCorrectAnswer) {
      const key = bird.id - 1;
      const tempArr = classesForIndicatores.slice();

      if (questionBird.name === bird.name) {
        setIsCorrectAnswer(true);
        tempArr[key] = tempArr[key] + ' answers-list__indicator--correct';
        setClassesForIndicators(tempArr);
        setScore(score + levelScore);
        playAudio(correct);
        audioPlayer.current.audio.current.pause();
      } else {
        tempArr[key] = tempArr[key] + ' answers-list__indicator--wrong';
        setClassesForIndicators(tempArr);
        setLevelScore(levelScore - 1);
        playAudio(error);
      }
    }
  }

  return (
    <ul className="answers-list">
      {birdsList.map((bird) =>
        <li
          className="answers-list__item"
          onClick={() => checkAnswer(bird)}
          key={bird.id}>
          <div className={classesForIndicatores[bird.id - 1]}></div>
          {bird.name}
        </li>
      )}
    </ul>
  );
}

export default AnswersList;
