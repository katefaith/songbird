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
    setNeedRerender
  } = props;

  const goToNextLevel = () => {
    setLevel(level + 1);
    const randomIndex = Math.floor(Math.random() * Math.floor(6));
    setQuestionBird(birdsData[level + 1][randomIndex]);
    setIsCorrectAnswer(false);
    setSelectedBird(null);
    setLevelScore(5);
    setNeedRerender(true);
  }

  return (
    <button
      className={(isCorrectAnswer) ? 'button  button--active' : 'button'}
      onClick={goToNextLevel}>
      Дальше
    </button>
  );
}

export default ButtonNext;
