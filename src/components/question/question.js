import React from 'react';

import bird from './images/bird.jpg'

import './question.scss';

const Question = ({ isCorrectAnswer, questionBird }) => {

  return (
    <div className="question">
      <img
        className="question__image"
        src={(isCorrectAnswer) ? questionBird.image : bird}
        width="200"
        height="155"
        alt="bird" />
      <div className="question__details">
        <h2 className="question__heading">
          {(isCorrectAnswer) ? questionBird.name : '*****'}
        </h2>
        <audio controls>
          <source src={questionBird.audio} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default Question;
