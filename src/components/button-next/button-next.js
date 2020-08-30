import React from 'react';

import './button-next.scss';

const ButtonNext = (props) => {

  const {
    isCorrectAnswer,
    setIsCorrectAnswer,
    level,
    setLevel,
    setQuestionBird,
    birdsData,
    setSelectedBird,
    setLevelScore,
    setNeedRerender,
    setScore
  } = props;

  const goToNextLevel = () => {

    setLevel(level + 1);

    if(level < 5) {
      const randomIndex = Math.floor(Math.random() * Math.floor(6));
      setQuestionBird(birdsData[level + 1][randomIndex]);
      setIsCorrectAnswer(false);
      setSelectedBird(null);
      setLevelScore(5);
      setNeedRerender(true);
    }
  }

  const playAgain = () => {
    setLevel(0);
    const randomIndex = Math.floor(Math.random() * Math.floor(6));
    setQuestionBird(birdsData[0][randomIndex]);
    setIsCorrectAnswer(false);
    setSelectedBird(null);
    setScore(0);
    setLevelScore(5);
    setNeedRerender(true);
  }

  return (
    <button
      disabled={!isCorrectAnswer && level < 6}
      className={(isCorrectAnswer) ? 'button  button--active' : 'button'}
      onClick={(level === 6) ? playAgain : goToNextLevel}>
      {(level === 6) ? 'Играть снова' : 'Дальше'}
    </button>
  );
}

export default ButtonNext;
