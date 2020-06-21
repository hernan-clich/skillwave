import React from 'react';

function Card(props) {
    const typeOfCard = `card ${props.typeOfCard}`;
    
    return (
        <div className={typeOfCard}>
            <div className="card-container">
                <img src={props.iconUrl} alt="img" />
                <div className="card-text">
                    <h3>{props.cardTitle}</h3>
                    <p>{props.cardText}</p>
                    {/* <a href="#contact">{props.cardButton}</a> */}
                </div>
            </div>
        </div>
    );
}

export default Card;