import React from 'react';

function Services(props) {
    const typeOfCard = `serv ${props.typeOfCard}`;
    
    return (
        <div className={typeOfCard}>
            <div className="serv-container">
                <img src={props.iconUrl} alt="img" />
                <div className="serv-text">
                    <h3>{props.cardTitle}</h3>
                    <p>{props.cardText}</p>
                </div>
            </div>
        </div>
    );
}

export default Services;