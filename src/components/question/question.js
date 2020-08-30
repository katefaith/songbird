import React from 'react';

import bird from './images/bird.jpg'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import '../audio-player.scss';

import './question.scss';

const Question = ({ isCorrectAnswer, questionBird, audioPlayer, detailsAudioPlayer }) => {

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
        <AudioPlayer
          src={questionBird.audio}
          autoPlayAfterSrcChange={false}
          loop={true}
          ref={audioPlayer}
          onPlay={() => {
            if (detailsAudioPlayer.current) detailsAudioPlayer.current.audio.current.pause();
          }} />
      </div>
    </div>
  );
}

export default Question;
