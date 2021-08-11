import React from 'react';
import covered from "../images/covered.png";
import './Covered.css'

function Covered() {
  return (
    <div className="img-container">
      <img src={covered} alt="Covered project" />
    </div>
  )
};

export default Covered;