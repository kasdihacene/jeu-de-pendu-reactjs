import React from 'react';
import './../../App.css'

const Card = ({card, index, feedback, onClick})=>(
    <div className="d-inline p-2 bg-primary text-white card " onClick={() => onClick(card)}>
        {card}
    </div>
)

export default Card;