import React from 'react';

import './answers-list.scss';

const AnswersList = ({ birdsList }) => {
  return (
    <ul className="answers-list">
      {birdsList.map((bird) =>
        <li
          className="answers-list__item"
          key={bird.id}>
          <div className="answers-list__indicator"></div>
          {bird.name}
        </li>
      )}
    </ul>
  );
}

export default AnswersList;
