import React, { useRef, useEffect } from "react";

function Modal({isActive, setModalActive, setSubmitted}) {
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