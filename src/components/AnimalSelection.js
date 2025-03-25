import React from 'react';

// Animal selection data with additional details
export const animals = [
  { 
    name: 'Lion', 
    emoji: '🦁', 
    description: 'Fierce Leader',
    color: '#FF6B6B',
    traits: ['Courage', 'Strength']
  },
  { 
    name: 'Tiger', 
    emoji: '🐯', 
    description: 'Stealthy Hunter',
    color: '#4ECDC4',
    traits: ['Strategy', 'Power']
  },
  { 
    name: 'Bear', 
    emoji: '🐻', 
    description: 'Resilient Warrior',
    color: '#45B7D1',
    traits: ['Endurance', 'Protection']
  },
  { 
    name: 'Wolf', 
    emoji: '🐺', 
    description: 'Pack Strategist',
    color: '#FFA07A',
    traits: ['Teamwork', 'Intelligence']
  },
  { 
    name: 'Fox', 
    emoji: '🦊', 
    description: 'Cunning Trickster',
    color: '#FF9FF3',
    traits: ['Wit', 'Adaptability']
  },
  { 
    name: 'Panda', 
    emoji: '🐼', 
    description: 'Zen Master',
    color: '#A29BFE',
    traits: ['Calm', 'Wisdom']
  }
];

function AnimalSelection({ player, selectedAnimal, onAnimalSelect }) {
  return (
    <div className="animal-selection-container">
      <h2 className="player-selection-title">
        Player {player}: Select Your Animal Companion
      </h2>
      <div className="animal-grid">
        {animals.map((animal) => (
          <div 
            key={`p${player}-${animal.name}`}
            className={`animal-card ${selectedAnimal === animal ? 'selected' : ''}`}
            onClick={() => onAnimalSelect(animal)}
            style={{
              '--animal-color': animal.color
            }}
          >
            <div className="animal-emoji">{animal.emoji}</div>
            <div className="animal-details">
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
              <div className="animal-traits">
                {animal.traits.map((trait) => (
                  <span key={trait} className="animal-trait">{trait}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalSelection;