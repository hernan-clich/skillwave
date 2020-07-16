import React, { useEffect, useRef, useState } from 'react';
import { linkedinBlueIcon, globeIcon } from './Svgs';

function Header(props, ref) {
    const {heroRef, contactRef, aboutRef, servicesRef, testimonialsRef} = ref;
    const [inputChecked, setInputChecked] = useState(false);
    const navBar = useRef(null);
    const logoImg = useRef(null);
    const langOptions = useRef(null);
    const langMobRef = useRef(null);
    const {setHeaderState, headerState} = props;

    useEffect(()=>{
        const heroRefCurr = heroRef.current;
        
        const heroOptions = {
            root: null,
            threshold: 0.13,
            rootMargin: '0px'
        };

        const heroObserver = new IntersectionObserver(entries =>{
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    navBar.current.classList.add('secondary');
                    logoImg.current.setAttribute("src", "./assets/logo-hor-inv.svg");
                } else if (entry.isIntersecting && entry.target.classList.contains('hero')) {
                    navBar.current.classList.remove('secondary');
                    logoImg.current.setAttribute("src", "./assets/logo-hor.svg");
                }
            });
        }, heroOptions);

        heroObserver.observe(heroRefCurr);

        return () => {
            heroObserver.unobserve(heroRefCurr);
        }
    }, [heroRef]);

    const handleCheckbox = () =>{
        if(inputChecked){
            setInputChecked(false);
        } else {
            setInputChecked(true);
        }
    };

    const handleAboutClick = () => {
        window.scrollTo({top: aboutRef.current.offsetTop - 50, behavior: 'smooth'});
        if(inputChecked) setInputChecked(false);
    }

    const handleServicesClick = () => {
        window.scrollTo({top: servicesRef.current.offsetTop - 50, behavior: 'smooth'});
        if(inputChecked) setInputChecked(false);
    }

    const handleTestiClick = () => {
        window.scrollTo({top: testimonialsRef.current.offsetTop - 50, behavior: 'smooth'});
        if(inputChecked) setInputChecked(false);
    }

    const handleContactClick = () => {
        window.scrollTo({top: contactRef.current.offsetTop - 50, behavior: 'smooth'});
        if(inputChecked) setInputChecked(false);
    }

    const handleLangOptions = e => {
        if(!langOptions.current.classList.contains('active')){
            langOptions.current.classList.add('active');
        } 
    }

    const handleMobEng = () => {
        setHeaderState(true);
        setInputChecked(false);
        setTimeout(() => {
            langOptions.current.classList.remove('active');    
        }, 1);
    }

    const handleMobEsp = () => {
        setHeaderState(false)
        setInputChecked(false);
        setTimeout(() => {
            langOptions.current.classList.remove('active');    
        }, 1);
    }

    const handleOutsideClick = e => {
        if(e.target !== langMobRef.current) {
            langOptions.current.classList.remove('active');    
        }
    }

    return (
        <div id="nav-desktop">
            <header ref={navBar} className="navbar-main">
                <img ref={logoImg} className="logo-img" src="./assets/logo-hor.svg" alt="logo"/>
                <div className="navbar-mobile">
                <input 
                    type="checkbox" 
                    className="nav-switch"
                    onChange={handleCheckbox}
                    checked={inputChecked}
                />
                    <div className="hamburger">
                        <span></span>
                    </div>
                    <div className="menu">
                        <div onClick={handleOutsideClick} className="circle-wrapper">
                            <div className="list-container">
                                <ul>
                                    <li>
                                        <div ref={langMobRef} onClick={handleLangOptions} className="lang-mobile">
                                            {headerState ? 'Language' : 'Idioma'}
                                            <div ref={langOptions} className="lang-options">
                                                <span onClick={handleMobEng}>English</span>
                                                <span onClick={handleMobEsp}>Español</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li><button onClick={handleAboutClick}>{props.linkTwo}</button></li>
                                    <li><button onClick={handleServicesClick}>{props.linkOne}</button></li>
                                    <li><button onClick={handleTestiClick}>{props.linkThree}</button></li>
                                    <li><button onClick={handleContactClick}>{props.linkFour}</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box"><button onClick={handleAboutClick} className="nav-link">{props.linkTwo}</button></div>
                <div className="box"><button onClick={handleServicesClick} className="nav-link">{props.linkOne}</button></div>
                <div className="box"><button onClick={handleTestiClick} className="nav-link">{props.linkThree}</button></div>
                <div className="box"><button onClick={handleContactClick} className="nav-link">{props.linkFour}</button></div>
                <div className="nav-icons">
                    <div className="nav-icon-lang">
                        {globeIcon()}
                    </div>
                    <a href="https://www.linkedin.com/in/florencia-c-fernandez/" target="_blank" rel="external noreferrer noopener nofollow">
                        {linkedinBlueIcon()}
                    </a>
                    {props.children}
                </div>
            </header>
        </div>
    );
}

export default React.forwardRef(Header);