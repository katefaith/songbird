import React from 'react';
import AnswersList from '../answers-list/answers-list';
import Details from '../details/details';

import './answers.scss';

const Answers = (props) => {
  const { birdsList, questionBird, isCorrectAnswer, setIsCorrectAnswer, selectedBird, setSelectedBird } = props;

  return (
    <div className="answers">
      <AnswersList
        birdsList={birdsList}
        questionBird={questionBird}
        isCorrectAnswer={isCorrectAnswer}
        setIsCorrectAnswer={setIsCorrectAnswer}
        setSelectedBird={setSelectedBird} />
      <Details selectedBird={selectedBird} />
    </div>
  );
}

export default Answers;
