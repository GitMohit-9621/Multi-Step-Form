import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ step }) => {
  const stepPercentage = (step - 1) / 3 * 100;
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-line">
        <div
          className="progress-bar-fill"
          style={{ width: `${stepPercentage}%` }}
        />
      </div>
      <div className="progress-bar-steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
        <div className={`step ${step >= 4 ? 'active' : ''}`}>4</div>
      </div>
    </div>
  );
};

export default ProgressBar;
