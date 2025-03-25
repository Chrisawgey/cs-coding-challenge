import React from 'react';

// Animal selection data
export const animals = [
  { name: 'Lion', emoji: '🦁' },
  { name: 'Tiger', emoji: '🐯' },
  { name: 'Bear', emoji: '🐻' },
  { name: 'Wolf', emoji: '🐺' },
  { name: 'Fox', emoji: '🦊' },
  { name: 'Panda', emoji: '🐼' }
];

function AnimalSelection({ player, selectedAnimal, onAnimalSelect }) {
  return (
    <div>
      <h2>Player {player}: Select Your Animal</h2>
      <div className="animal-selection">
        {animals.map((animal) => (
          <button
            key={`p${player}-${animal.name}`}
            className={`animal-button ${selectedAnimal === animal ? 'selected' : ''}`}
            onClick={() => onAnimalSelect(animal)}
          >
            {animal.emoji} {animal.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimalSelection;