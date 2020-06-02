import React from 'react';

function Header(props) {
    return (
        <div id="nav-desktop">
        <header className="navbar-desktop">
            <img className="logo-img" src="/logo-hor-inv.png" alt="logo"/>
            <div className="burger-cont"><span>&nbsp;</span></div>
            <div className="box"><a href="#about-us" className="nav-link">{props.linkOne}</a></div>
            <div className="box"><a href="#services" className="nav-link">{props.linkTwo}</a></div>
            <div className="box"><a href="#contact" className="nav-link">{props.linkThree}</a></div>
            <div className="nav-icons">
                <img className="nav-icon" alt="icon" src="./iconmonstr-globe-3.svg" />
                <a href="https://www.linkedin.com/in/florencia-c-fernandez/" target="_blank" rel="external noreferrer noopener nofollow">
                    <img src="linkedin-ico.png" alt="linkedin logo"/>
                </a>
                {props.children}
            </div>
        </header>
        <header className="navbar-mobile">
            <ul className="none">
                <li>{props.linkOne}</li>
                <li>{props.linkTwo}</li>
                <li>{props.linkThree}</li>
            </ul>
        </header>
        </div>
    );
}

export default Header;