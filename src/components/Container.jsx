// import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import { ItemTypes } from './ItemTypes';
import './Container.css';


const Container = ({ id, cards, onCardDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      onCardDrop(item.card, id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`container ${isOver ? 'highlight' : ''}`}>
      <h2>Container {id}</h2>
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Container;
