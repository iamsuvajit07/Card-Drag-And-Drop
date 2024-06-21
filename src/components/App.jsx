// import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './Container';
// import { ItemTypes } from './ItemTypes';
import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  const initialContainers = {
    container1: [
      { id: 1, name: 'Card 1', color: '#FF5733' },
      { id: 2, name: 'Card 2', color: '#33FFB8' },
    ],
    container2: [
      { id: 3, name: 'Card 3', color: '#336BFF' },
      { id: 4, name: 'Card 4', color: '#FF33E9' },
    ],
    container3: [
      { id: 5, name: 'Card 5', color: '#B833FF' },
      { id: 6, name: 'Card 6', color: '#33FFD1' },
    ],
  };

  const [containers, setContainers] = useState(initialContainers);

  const handleCardDrop = (draggedCard, targetContainerId) => {
    // Update state to remove the card from the source container and add it to the target container
    setContainers((prevContainers) => {
      const updatedContainers = { ...prevContainers };

      // Remove the dragged card from its source container
      Object.keys(updatedContainers).forEach((containerId) => {
        updatedContainers[containerId] = updatedContainers[containerId].filter(
          (card) => card.id !== draggedCard.id
        );
      });

      // Add the dragged card to the target container
      updatedContainers[targetContainerId] = [
        ...updatedContainers[targetContainerId],
        draggedCard,
      ];

      return updatedContainers;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        {Object.keys(containers).map((containerId) => (
          <Container
            key={containerId}
            id={containerId}
            cards={containers[containerId]}
            onCardDrop={handleCardDrop}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default App;
