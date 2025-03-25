import React, { useState, useEffect } from 'react';
import './App.css';

import AnimalSelection from './components/AnimalSelection';
import ChallengeCard from './components/ChallengeCard';
import MountainVisualization from './components/MountainVisualization';

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [player1Challenges, setPlayer1Challenges] = useState({
    ctf1: false,
    ctf2: false,
    leetcode: false
  });
  const [player2Challenges, setPlayer2Challenges] = useState({
    ctf1: false,
    ctf2: false,
    leetcode: false
  });
  const [winner, setWinner] = useState(null);

  // Check if all challenges are completed for a player
  const areAllChallengesCompleted = (challenges) => 
    challenges.ctf1 && challenges.ctf2 && challenges.leetcode;

  // Check for a winner
  useEffect(() => {
    if (areAllChallengesCompleted(player1Challenges)) {
      setWinner(1);
    } else if (areAllChallengesCompleted(player2Challenges)) {
      setWinner(2);
    }
  }, [player1Challenges, player2Challenges]);

  const handleAnimalSelect = (player, animal) => {
    if (player === 1) {
      setPlayer1(animal);
    } else {
      setPlayer2(animal);
    }
  };

  const startGame = () => {
    if (player1 && player2) {
      setGameStarted(true);
    }
  };

  const finishChallenge = (player, challengeType) => {
    if (player === 1) {
      // Update player 1's challenges
      const newChallenges = { ...player1Challenges, [challengeType]: true };
      setPlayer1Challenges(newChallenges);
    } else {
      // Update player 2's challenges
      const newChallenges = { ...player2Challenges, [challengeType]: true };
      setPlayer2Challenges(newChallenges);
    }
  };

  // Reset game
  const resetGame = () => {
    setPlayer1(null);
    setPlayer2(null);
    setPlayer1Challenges({ ctf1: false, ctf2: false, leetcode: false });
    setPlayer2Challenges({ ctf1: false, ctf2: false, leetcode: false });
    setWinner(null);
    setGameStarted(false);
  };

  return (
    <div className="container">
      <h1>CS Club Coding Challenge</h1>

      {/* Winner Announcement */}
      {winner && (
        <div className="winner-banner">
          🏆 Player {winner} Reaches the Mountain Peak! 🏆
          <button 
            className="reset-game-btn"
            onClick={resetGame}
          >
            Climb Again
          </button>
        </div>
      )}

      {/* Animal Selection Phase */}
      {!gameStarted && (
        <div>
          <AnimalSelection 
            player={1} 
            selectedAnimal={player1}
            onAnimalSelect={(animal) => handleAnimalSelect(1, animal)}
          />

          <AnimalSelection 
            player={2} 
            selectedAnimal={player2}
            onAnimalSelect={(animal) => handleAnimalSelect(2, animal)}
          />

          {player1 && player2 && (
            <button 
              className="start-challenge-btn"
              onClick={startGame}
            >
              Start Mountain Climb
            </button>
          )}
        </div>
      )}

      {/* Game Started Phase */}
      {gameStarted && !winner && (
        <div>
          <MountainVisualization 
            player1={player1}
            player2={player2}
            player1Challenges={player1Challenges}
            player2Challenges={player2Challenges}
          />

          <div className="challenges-section">
            <div className="challenges-column">
              <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Player 1 Challenges
              </h2>
              
              <ChallengeCard 
                title="CTF Challenge 1"
                description="Solve the security puzzle"
                challengeType="ctf1"
                onFinish={() => finishChallenge(1, 'ctf1')}
                isCompleted={player1Challenges.ctf1}
              />

              <ChallengeCard 
                title="CTF Challenge 2"
                description="Crack the encryption"
                challengeType="ctf2"
                onFinish={() => finishChallenge(1, 'ctf2')}
                isCompleted={player1Challenges.ctf2}
              />

              <ChallengeCard 
                title="LeetCode Challenge"
                description="Solve the algorithm problem"
                challengeType="leetcode"
                onFinish={() => finishChallenge(1, 'leetcode')}
                isCompleted={player1Challenges.leetcode}
              />
            </div>

            <div className="challenges-column">
              <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Player 2 Challenges
              </h2>

              <ChallengeCard 
                title="CTF Challenge 1"
                description="Solve the security puzzle"
                challengeType="ctf1"
                onFinish={() => finishChallenge(2, 'ctf1')}
                isCompleted={player2Challenges.ctf1}
              />

              <ChallengeCard 
                title="CTF Challenge 2"
                description="Crack the encryption"
                challengeType="ctf2"
                onFinish={() => finishChallenge(2, 'ctf2')}
                isCompleted={player2Challenges.ctf2}
              />

              <ChallengeCard 
                title="LeetCode Challenge"
                description="Solve the algorithm problem"
                challengeType="leetcode"
                onFinish={() => finishChallenge(2, 'leetcode')}
                isCompleted={player2Challenges.leetcode}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;