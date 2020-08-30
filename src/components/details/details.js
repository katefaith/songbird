import React from 'react';

import './details.scss';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

const Details = ({ selectedBird, audioPlayer, detailsAudioPlayer }) => {
  if (selectedBird == null) {
    return (
      <div className="details">
        <p>Послушайте плеер и выберите птицу из списка</p>
      </div>
    );
  }

  return (
    <div className="details">
      <div className="details__info">
        <img
          className="details__image"
          src={selectedBird.image}
          width="200"
          height="155"
          alt={selectedBird.name} />
        <div className="details__names">
          <h2>{selectedBird.name}</h2>
          <p>{selectedBird.species}</p>
          <AudioPlayer
            src={selectedBird.audio}
            ref={detailsAudioPlayer}
            autoPlayAfterSrcChange={false}
            onPlay={() => audioPlayer.current.audio.current.pause()} />
        </div>
      </div>
      <p className="details__descr">{selectedBird.description}</p>
    </div>
  );
}

export default Details;
