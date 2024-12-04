import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';
const App=()=>{
    const [cards,setCards] =useState([]);
    const addCard=(cardData)=>{
        const newCard={ ...cardData,id:Date.now() };
        setCards([...cards,newCard]);
    };
    const deleteCard=(id)=> {
        const updatedCards=cards.filter((card)=>card.id!==id);
        setCards(updatedCards);
    };
    const placedCount=cards.filter((card)=>card.status==='placed').length;
    const unplacedCount=cards.filter((card)=>card.status==='unplaced').length;
    return (
        <div className="app">
            <Header />
            <Form addCard={addCard} />       
            <CardList cards={cards} deleteCard={deleteCard} />
        </div>
    );
};
export default App;
