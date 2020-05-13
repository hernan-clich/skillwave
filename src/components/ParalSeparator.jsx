import React from 'react';

function ParalSeparator(props) {
    const bgImgUrl = {
        backgroundImage: props.imgUrl
    };

    return (
    <div className="paral-img" style={bgImgUrl}>
        <div className="spans">
            <span>{props.span1}</span>
            <span>{props.span2}</span>
            <span>{props.span3}</span>
        </div>
    </div>
    );
}

export default ParalSeparator;