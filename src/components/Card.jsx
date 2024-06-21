// import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import './Card.css';

const Card = ({ id, name, color }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { card: { id, name, color } },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`card ${isDragging ? 'dragging' : ''}`} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
};

export default Card;
