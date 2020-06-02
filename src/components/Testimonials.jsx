import React, {
    useState,
    useRef
} from 'react';
import {
    openQuotes,
    prevArrow
} from './Svgs';
import {
    testiEng,
    testiEsp
} from './Text';

function Testimonials(props) {
    const testiState = props.testiState;
    const testiCard = useRef();
    const clientNameRef = useRef();
    const [clientName, setclientName] = useState(testiEng[2].clientNameEng);

    const clientIndex = () => {
        return testiEng.findIndex(c => c === clientNameRef.current.innerText);
    }

    const clientSwapper = () => {
        if (testiState) {
            if (clientNameRef.current.innerText === testiEng[testiEng.length - 1]) {
                setTimeout(() => {
                    setclientName(testiEng[0].clientNameEng);
                }, 399);
            } else {
                setTimeout(() => {
                    setclientName(testiEng[clientIndex() + 1].clientNameEng);
                }, 399);
            }
        } else {
            if (clientNameRef.current.innerText === testiEsp[testiEsp.length - 1]) {
                setTimeout(() => {
                    setclientName(testiEsp[0].clientNameEsp);
                }, 399);
            } else {
                setTimeout(() => {
                    setclientName(testiEsp[clientIndex() + 1].clientNameEsp);
                }, 399);
            }
        }
    }

    const prevSlideEffect = () => {
        testiCard.current.classList.add('prev-testimonial');
        setTimeout(() => {
            testiCard.current.classList.remove('prev-testimonial');
        }, 799);
    }
    setTimeout(() => {

    }, 799);

    const nextSlideEffect = () => {
        console.log(testiEng, testiState);
        clientSwapper();
        testiCard.current.classList.add('next-testimonial');
        setTimeout(() => {
            testiCard.current.classList.remove('next-testimonial');
        }, 799);
    }

    return ( 
        <div className = "testimonials" >
            <div className = "testi-layer" >
                <h2 > What our clients are saying </h2> 
                <div ref = { testiCard } className = "testi-text-wrapper">
                    {openQuotes()}
                    <p> Teníamos una búsqueda bastante específica y Florencia encontró un montón de candidatos con esas características.Pensé que no iba a ser tan fácil, pero tuvimos la posibilidad de elegir entre muy buenos perfiles. </p>
                    <span ref = {clientNameRef}>{clientName}</span>
                    <span> CEO - Google </span>
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