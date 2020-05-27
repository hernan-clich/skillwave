import React from 'react';

function Contact(props) {
    return (
        <div className="contact" id="contact">
            {props.children}
            <form autoComplete="off">
                <div className="input-wrapper">
                    <label htmlFor="full-name">{props.labelOne}</label>
                    <input type="text" id="full-name"></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">{props.labelTwo}</label>
                    <input type="email" id="email"></input>
                </div>
                <div className="text-wrapper">
                    <label htmlFor="message">{props.labelThree}</label>
                    <textarea id="message" rows="4" cols="10"></textarea>
                </div>
                <button>{props.btnText}</button>
            </form>
        </div>
    );
}

export default Contact;