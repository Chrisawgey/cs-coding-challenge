import React from 'react';

function ChallengeCard({ 
  title, 
  description, 
  challengeType, 
  onFinish,
  isCompleted
}) {
  return (
    <div className="challenge-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {!isCompleted ? (
        <button 
          className="challenge-button"
          onClick={onFinish}
        >
          Finish
        </button>
      ) : (
        <span className="challenge-status">✅ Completed</span>
      )}
    </div>
  );
}

export default ChallengeCard;