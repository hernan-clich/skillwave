import React, { useRef, useEffect } from "react";

function Modal({isActive, setModalActive, setSubmitted, modalTitle, modalText, modalBtn}) {
    const modalRef = useRef(null);
    const modalOverlayRef = useRef(null);

    // (function openModal(){
    //     if(isActive){
    //         modalRef.current.classList.add('modal-active');
    //         modalOverlayRef.current.classList.add('modal-active');
    //     }
    // })()
    useEffect(()=>{
        if(isActive){
            modalRef.current.classList.add('modal-active');
            modalOverlayRef.current.classList.add('modal-active');
        }
    }, [isActive]);

    const handleClick = () => {
        modalRef.current.classList.remove('modal-active');
        modalOverlayRef.current.classList.remove('modal-active');
        setModalActive(false);
        setSubmitted(false);
    }
    
    return (
        <>
            <div className="modal" ref={modalRef}>
                <div className="modal-content">
                    <h2>{modalTitle}</h2>
                    <p>{modalText}</p>
                    <button onClick={handleClick}>{modalBtn}</button>
                </div>
            </div>
            <div className="modal-overlay" ref={modalOverlayRef}></div>
        </>
    );
}

export default Modal;