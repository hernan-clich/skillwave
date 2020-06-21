import React, { useState, useRef } from 'react';
import Modal from './Modal';
import { personIcon, emailIcon, locationIcon, whatsappIcon } from './Svgs';

function Contact(props, ref) {
    const [disableInput, setDisableInput] = useState(false);
    const [nameState, setNameState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [msgState, setMsgState] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const formRef = useRef(null);
    const fullnameRef = useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);

    const {fullName, email, message} = {
        fullName: /^[a-zA-ZÁÉÍÓÚÑÇáéíóúñç ]{2,40}$/i,
        // eslint-disable-next-line no-useless-escape
        email: /^([a-z\d-_\.]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/,
        message: /^([a-zA-z\dÁÉÍÓÚÑÇáéíóúñç ,@=';:"#$%€&/()¿?¡!_+*.-]){2,200}$/
    }
    
    const nameChecker = e => {
        if(fullName.test(e.target.value)) e.target.classList.value = 'valid';
        else e.target.classList.value = 'invalid';
        setNameState(e.target.value);
    }

    const emailChecker = e => {
        if(email.test(e.target.value)) e.target.classList.value = 'valid';
        else e.target.classList.value = 'invalid';
        setEmailState(e.target.value);
    }

    const messageChecker = e => {
        if(message.test(e.target.value)) e.target.classList.value = 'valid';
        else e.target.classList.value = 'invalid';
        setMsgState(e.target.value);
    }

    const handleSubmission = e => {
        if(fullName.test(fullnameRef.current.value)
            && email.test(emailRef.current.value)
            && message.test(msgRef.current.value)
            ){
            setSubmitted(true);
            setModalActive(true);
            fullnameRef.current.classList.remove('valid');
            emailRef.current.classList.remove('valid');
            msgRef.current.classList.remove('valid');
            return true;
        } else {
            e.preventDefault();
        }
    }
  
    const handleOnLoad = e => {
        if(submitted) setDisableInput(true);
        setNameState('');
        setEmailState('');
        setMsgState('');
        e.preventDefault() ;
    }

    return (
        <div ref={ref} className="contact" id="contact">
            <div className="cont-form">
            <iframe 
                title="hidden iframe" 
                name="hidden_iframe" 
                id="hidden_iframe" 
                style={{display:"none"}} 
                onLoad={handleOnLoad}
            />
            <form 
                onSubmit={handleSubmission}
                ref={formRef}
                autoComplete="off" 
                target="hidden_iframe" 
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7vcTkZ3Nw6yJr927RMdNCD7wfxjMTge3f4KOSewj9YV2iOg/formResponse"
            >
                <div className="input-wrapper">
                    <label htmlFor="full-name">{props.labelOne}</label>
                    <input 
                        onChange={nameChecker} 
                        value={nameState} 
                        ref={fullnameRef} 
                        type="text" 
                        id="full-name" 
                        name="entry.1186644385"
                        disabled={disableInput ? 'disabled' : ''}
                        required
                    />
                    <p>{props.errorName}</p>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">{props.labelTwo}</label>
                    <input 
                        onChange={emailChecker} 
                        value={emailState}
                        ref={emailRef}
                        type="email" 
                        id="email" 
                        name="emailAddress"
                        disabled={disableInput ? 'disabled' : ''}
                        required
                    />
                    <p>{props.errorEmail}</p>
                </div>
                <div className="text-wrapper">
                    <label htmlFor="message">{props.labelThree}</label>
                    <textarea 
                        onChange={messageChecker}
                        value={msgState}
                        ref={msgRef}
                        id="message" 
                        rows="3" 
                        cols="10" 
                        name="entry.676113856"
                        disabled={disableInput ? 'disabled' : ''}
                        required
                    />
                    <p>{props.errorMsg}</p>
                </div>
                <button 
                    type="submit" 
                    disabled={disableInput ? 'disabled' : ''}
                >
                    {props.btnText}
                </button>
            </form>
            <Modal 
                isActive={modalActive}
                setSubmitted={setSubmitted}
                setModalActive={setModalActive}
            />
            </div>
            <div className="contact-card">
                <h3>Contact info</h3>
                <div className="contact-detail">
                    <div className="contact-icon">
                        {locationIcon()}
                    </div>
                    <p>Buenos Aires, Argentina</p>
                </div>
                <div className="contact-detail">
                    <div className="contact-icon">
                        {personIcon()}
                    </div>
                    <p>Florencia Fernandez</p>
                </div>
                <div className="contact-detail">
                    <div className="contact-icon">
                        {emailIcon()}
                    </div>
                    <p>florencia.fernandez@skillwave.com.ar</p>
                </div>
                <div className="contact-detail">
                    <div className="contact-icon">
                        {whatsappIcon()}
                    </div>
                    <p>+541157327188</p>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default React.forwardRef(Contact);