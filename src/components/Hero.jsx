import React, { useEffect } from 'react';

function Hero(props, ref) {

    useEffect(()=>{
        const heroRefCurr = ref.current;
        
        const heroOptions = {
            root: null,
            threshold: 0.13,
            rootMargin: '0px'
        };

        const heroHeader = new IntersectionObserver((entries, i) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    heroRefCurr.childNodes[0].classList.remove('fade-up');
                    heroRefCurr.childNodes[1].classList.remove('fade-up');
                    heroRefCurr.childNodes[2].classList.remove('fade-up');
               }
            });
        }, heroOptions);

        heroHeader.observe(heroRefCurr);

        return () => {
            heroHeader.unobserve(heroRefCurr);
        }
    }, [ref]);

    return (
            <div ref={ref} className="hero" id="hero">
                <h1 className="fade-up">DIGITAL SKILLS</h1>
                <p className="fade-up">{props.subtitle}</p>
                <button className="fade-up">{props.heroBtn}</button>
                <video className="hero-bg" autoPlay muted loop>
                <source src="/video.mp4" type="video/mp4"/>
                </video>
            </div>
    );
}

export default React.forwardRef(Hero);