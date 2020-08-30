import React from 'react'

import './result.scss';

import image from './images/result.png';

const Result = ({ score }) => {
  return (
    <div className="result">
      {(score === 30)
        ? <>
          <h2>Поздравляем!</h2>
          <p>Вы прошли викторину и набрали {score} баллов из 30 возможных.</p>
          <img src={image} alt="result" />
        </>
        : <p>Вы  набрали {score} баллов из 30 возможных.</p>}
    </div>
  );
}

export default Result;
