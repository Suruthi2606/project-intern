import React from 'react';
import Card from './Card';
import './Card.css';

const CardList = ({cards,deleteCard }) => {
    return (
        <div className="card-list">
            {cards.map((card) => (
                <Card key={card.id} data={card} removeCard={deleteCard} />
            ))}
        </div>
    );
};
export default CardList;
