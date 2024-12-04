import React from 'react';
import './Card.css';

const Card = ({data,removeCard }) => {
    return (
        <div className="card">
            <div className="card1"></div>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Role:</strong> {data.role}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone Number:</strong> {data.phone}</p>
            <p><strong>Course:</strong> {data.course}</p>
            <p><strong>Status:</strong> {data.status}</p>
            <button onClick={()=> removeCard(data.id)} className="delete">Delete</button>
        </div>
    );
};
export default Card;
