import React from 'react';

function LangPicker(props) {
    return (
        // <div className="lang-picker">
        //     <span className={props.classEng} onClick={props.clickEng}>ENG</span>
        //     <span className={props.classEsp} onClick={props.clickEsp}>ESP</span>
        // </div>
        <div className="lang-toggler">
            <div className="lang" onClick={props.clickEng}>English</div>
            <div className="lang" onClick={props.clickEsp}>Español</div>
        </div>
    );
}

export default LangPicker;