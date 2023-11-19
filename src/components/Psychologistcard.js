// PsychologistCard.js
import React from 'react';

const PsychologistCard = ({ name, expertise }) => {
  return (
    <div className="psychologistCard">
      <h3>{name}</h3>
      <p>{expertise}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default PsychologistCard;
