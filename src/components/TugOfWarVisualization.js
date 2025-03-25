import React from 'react';

function TugOfWarVisualization({ 
  player1, 
  player2, 
  player1Score, 
  player2Score 
}) {
  const calculateTugOfWarPosition = () => {
    const totalScore = player1Score + player2Score;
    if (totalScore === 0) return '50%';
    
    const percentage = (player1Score / totalScore) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="tug-of-war-container">
      <div className="rope" />
      <div 
        className="player-marker player1"
        style={{
          left: '0%',
        }}
      >
        {player1?.emoji}
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: 'bold',
          color: '#4CAF50'
        }}>
          Player 1: {player1Score} pts
        </div>
      </div>
      <div 
        className="player-marker player2"
        style={{
          right: '0%',
        }}
      >
        {player2?.emoji}
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          right: '50%',
          transform: 'translateX(50%)',
          fontWeight: 'bold',
          color: '#FF5722'
        }}>
          Player 2: {player2Score} pts
        </div>
      </div>
    </div>
  );
}

export default TugOfWarVisualization;