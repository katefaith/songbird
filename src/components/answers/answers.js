import React from 'react';
import AnswersList from '../answers-list/answers-list';
import Details from '../details/details';

import './answers.scss';

const Answers = (props) => {
  const { birdsList } = props;

  return (
    <div className="answers">
      <AnswersList birdsList={birdsList} />
      <Details selectedBird={birdsList[0]} />
    </div>
  );
}

export default Answers;
