import React, { useRef } from "react";

function Modal({isActive, setNameState, setEmailState, setMsgState}) {
    const modalRef = useRef(null);
    const modalOverlayRef = useRef(null);

    (function openModal(){
        if(isActive){
            modalRef.current.classList.add('modal-active');
            modalOverlayRef.current.classList.add('modal-active');
        }
    })()

    const handleClick = () => {
        modalRef.current.classList.remove('modal-active');
        modalOverlayRef.current.classList.remove('modal-active');
   
    }
    
    return (
        <>
            <div className="modal" ref={modalRef}>
                <div className="modal-content">
                    <h3>Form submitted</h3>
                    <p>We'll contact you ASAP</p>
                    <button onClick={handleClick}>Return to page</button>
                </div>
            </div>
            <div className="modal-overlay" ref={modalOverlayRef}></div>
        </>
    );
}

export default Modal;