import React from 'react';

import './details.scss';

const Details = ({ selectedBird }) => {
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
          <h3>{selectedBird.species}</h3>
          <audio controls>
            <source src={selectedBird.audio} type="audio/mpeg" />
          </audio>
        </div>
      </div>
      <p className="details__descr">{selectedBird.description}</p>
    </div>
  );

}

export default Details;
