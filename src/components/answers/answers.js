import React from 'react';
import AnswersList from '../answers-list/answers-list';
import Details from '../details/details';

import './answers.scss';

const Answers = (props) => {
  const {
    birdsList,
    questionBird,
    isCorrectAnswer,
    setIsCorrectAnswer,
    selectedBird,
    setSelectedBird,
    levelScore,
    setLevelScore,
    score,
    setScore,
    needRerender,
    setNeedRerender,
  } = props;

  return (
    <div className="answers">
      <AnswersList
        birdsList={birdsList}
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
  );
}

export default Answers;
