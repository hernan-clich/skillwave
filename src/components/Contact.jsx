import React from 'react';

function Contact(props) {
    return (
        <div className="contact">
            {props.children}
            <form>
                <div className="input-wrapper">
                    <label htmlFor="full-name">Full Name:</label>
                    <input type="text" id="full-name"></input>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">Your email adress:</label>
                    <input type="email" id="email"></input>
                </div>
                <div className="text-wrapper">
                    <label htmlFor="message">Your message:</label>
                    <textarea id="message" rows="4" cols="10"></textarea>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default Contact;