import React from 'react';

function Services(props) {
    return (
        <div className="serv">
            <div className="serv1">
                {/* <div className="serv-img"> */}
                    <img src={props.imgServSrc} alt="service" />
                {/* </div> */}
                <h2>{props.servTitle}</h2>
                <p>{props.servText}</p>
            </div>
            
        </div>
    );
}

export default Services;