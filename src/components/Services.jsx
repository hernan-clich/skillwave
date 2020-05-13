import React from 'react';

function Services(props) {
    return (
        <div className="serv">
            <h2>{props.servTitle}</h2>
            <p>{props.servText}</p>
        </div>
    );
}

export default Services;