import React from 'react';

function MountainVisualization({ 
  player1, 
  player2, 
  player1Challenges, 
  player2Challenges 
}) {
  // Calculate height based on number of completed challenges
  const getPlayerHeight = (challenges) => {
    const completedCount = Object.values(challenges).filter(Boolean).length;
    return `${completedCount * 33}%`;
  };

  return (
    <div className="mountain-container">
      <div className="mountain">
        {/* Player 1 Mountain Peak */}
        <div 
          className="mountain-peak player1"
          style={{ 
            bottom: getPlayerHeight(player1Challenges),
          }}
        >
          {/* Player 1 Flag */}
          <div className="player-flag player1"></div>
          
          {/* Player 1 Animal */}
          <div className="player-animal">
            {player1?.emoji}
          </div>
        </div>

        {/* Player 2 Mountain Peak */}
        <div 
          className="mountain-peak player2"
          style={{ 
            bottom: getPlayerHeight(player2Challenges),
          }}
        >
          {/* Player 2 Flag */}
          <div className="player-flag player2"></div>
          
          {/* Player 2 Animal */}
          <div className="player-animal">
            {player2?.emoji}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MountainVisualization;