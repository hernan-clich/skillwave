import React, { useEffect, useRef } from 'react';
import backToTopIcon from './Svgs';

function Footer({heroRef}) {
    const backTop = useRef(null);
    
    useEffect(() => {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
           if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            //backTop.current.classList.remove('none');
            backTop.current.classList.add('slide-in');
           } else {
              //backTop.current.classList.add('none');
              backTop.current.classList.remove('slide-in');
           }
        }
    }, []);

    const handleTopClick = e => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    return (
        <footer>
            <p>Copyright © <span >Skillwave</span> - By <a
                href="https://github.com/hernan-clich"
                target="_blank" 
                rel="external noreferrer noopener nofollow"
            >Hernan Clich</a></p>
            <button ref={backTop} onClick={handleTopClick} aria-label="Back to top icon" aria-hidden="false">{backToTopIcon()}</button>
        </footer>
    );
}

export default Footer;