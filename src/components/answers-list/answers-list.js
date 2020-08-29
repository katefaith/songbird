import React from 'react';

import './answers-list.scss';

import correct from './audio/correct.mp3';
import error from './audio/error.mp3';

const AnswersList = (props) => {
  const { birdsList, questionBird, isCorrectAnswer, setIsCorrectAnswer, setSelectedBird } = props;

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  }

  const checkAnswer = (bird, target) => {
    setSelectedBird(bird);
    if (!isCorrectAnswer) {
      const li = target.closest('.answers-list__item');
      const indicator = li.querySelector('.answers-list__indicator');

      if (questionBird.name === bird.name) {
        setIsCorrectAnswer(true);
        indicator.classList.add('answers-list__indicator--correct');
        playAudio(correct);
      } else {
        indicator.classList.add('answers-list__indicator--wrong');
        playAudio(error);
      }
    }
  }

  return (
    <ul className="answers-list">
      {birdsList.map((bird) =>
        <li
          className="answers-list__item"
          onClick={({ target }) => checkAnswer(bird, target)}
          key={bird.id}>
          <div className="answers-list__indicator"></div>
          {bird.name}
        </li>
      )}
    </ul>
  );
}

export default AnswersList;
