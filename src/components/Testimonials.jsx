import React, { useState, useEffect, useRef, useCallback } from 'react';
import { openQuotes, prevArrow } from './Svgs';
import { testiEng, testiEsp } from './Text';

function Testimonials(props) {
    const testiState = props.testiState;
    const testiCard = useRef();
    const clientNameRef = useRef();
    const { testiContEng, clientNameEng, jobTitleEng } = testiEng;
    const { testiContEsp, clientNameEsp, jobTitleEsp } = testiEsp;
    const [testiCont, setTestiCont] = useState(testiContEng[2]);
    const [clientName, setclientName] = useState(clientNameEng[2]);
    const [jobTitle, setJobTitle] = useState(jobTitleEng[2]);

    const prevClient = ind => {
        if(testiState){
            if(clientNameRef.current.innerText === clientNameEng[0]){
                setTestiCont(testiContEng[clientNameEng.length - 1]);
                setclientName(clientNameEng[clientNameEng.length - 1]);
                setJobTitle(jobTitleEng[clientNameEng.length - 1]);
            } else {
                setTestiCont(testiContEng[ind - 1]);
                setclientName(clientNameEng[ind - 1]);
                setJobTitle(jobTitleEng[ind - 1]);
            }
        } else {
            if(clientNameRef.current.innerText === clientNameEsp[0]){
                setTestiCont(testiContEsp[clientNameEng.length - 1]);
                setclientName(clientNameEsp[clientNameEng.length - 1]);
                setJobTitle(jobTitleEsp[clientNameEng.length - 1]);
            } else {
                setTestiCont(testiContEsp[ind - 1]);
                setclientName(clientNameEsp[ind - 1]);
                setJobTitle(jobTitleEsp[ind - 1]);
            }
        }
    }

    const nextClient = useCallback(ind => {
        if(testiState){
            if(clientNameRef.current.innerText === clientNameEng[2]){
                setTestiCont(testiContEng[0]);
                setclientName(clientNameEng[0]);
                setJobTitle(jobTitleEng[0]);
            } else {
                setTestiCont(testiContEng[ind + 1]);
                setclientName(clientNameEng[ind + 1]);
                setJobTitle(jobTitleEng[ind + 1]);
            }
        } else {
            if(clientNameRef.current.innerText === clientNameEsp[2]){
                setTestiCont(testiContEsp[0]);
                setclientName(clientNameEsp[0]);
                setJobTitle(jobTitleEsp[0]);
            } else {
                setTestiCont(testiContEsp[ind + 1]);
                setclientName(clientNameEsp[ind + 1]);
                setJobTitle(jobTitleEsp[ind + 1]);
            }
        }
    }, [clientNameEng, clientNameEsp, jobTitleEng, jobTitleEsp, testiContEng, testiContEsp, testiState])

    const prevSlideEffect = () => {
        setTimeout(() => {
            prevClient(testiState 
                ? clientNameEng.findIndex(el => el === clientNameRef.current.innerText) 
                : clientNameEsp.findIndex(el => el === clientNameRef.current.innerText)
            );
        }, 399);
        testiCard.current.classList.add('prev-testimonial');
        setTimeout(() => {
            testiCard.current.classList.remove('prev-testimonial');
        }, 799);
    }

    const nextSlideEffect = useCallback(() => {
        setTimeout(() => {
            nextClient(testiState 
                ? clientNameEng.findIndex(el => el === clientNameRef.current.innerText) 
                : clientNameEsp.findIndex(el => el === clientNameRef.current.innerText)
            );
        }, 399);
        testiCard.current.classList.add('next-testimonial');
        setTimeout(() => {
            testiCard.current.classList.remove('next-testimonial');
        }, 799);
    }, [clientNameEng, clientNameEsp, nextClient, testiState]);

    useEffect(() => {
        nextSlideEffect();
    },[nextSlideEffect, testiState]);

    return ( 
        <div className = "testimonials" >
            <div className = "testi-layer" >
                <h2>{testiState ? 'What our clients are saying' : 'Qué dicen nuestros clientes'}</h2> 
                <div ref = { testiCard } className = "testi-text-wrapper">
                    {openQuotes()}
                    <p>{testiCont}</p>
                    <span ref = {clientNameRef}>{clientName}</span>
                    <span>{jobTitle}</span>
                </div>
                <div className = "arrow-container-prev" onClick = {prevSlideEffect}> 
                    {prevArrow()}
                </div> 
                <div className = "arrow-container-next" onClick = {nextSlideEffect}>
                    <svg className = "arrow next-slide" width = "24" height = "42" viewBox = "0 0 24 42" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
                        <path d = "M3.78947 42L24 21L3.78947 0L0 3.9375L16.4211 21L0 38.0625L3.78947 42Z" fill = "#00648F" />
                    </svg> 
                </div> 
            </div> 
        </div>
    );
}

export { Testimonials as default };