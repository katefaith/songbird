import React from 'react';

import bird from './images/bird.jpg'

import './question.scss';

const Question = () => {
  return (
    <div className="question">
      <img
        className="question__image"
        src={bird}
        width="200"
        height="155"
        alt="bird" />
      <div className="question__details">
        <h2 className="question__heading">Название</h2>
        <audio controls>
          <source src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default Question;
