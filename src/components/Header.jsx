import React from 'react';

function Header() {
    return (
        <div id="nav-desktop">
        <header className="navbar-desktop">
            <img className="logo-img" src="/logo-hor-inv.png" alt="logo"/>
            <div className="burger-cont"><span>&nbsp;</span></div>
            <div className="box"><a href="#buttony" className="nav-link">Empresas</a></div>
            <div className="box"><a href="#buttony" className="nav-link">Profesionales</a></div>
            <div className="box"><a href="#buttony" className="nav-link">Contacto</a></div>
            <button id="buttony" className="none"></button>
        </header>
        <header className="navbar-mobile">
            <ul className="none">
                <li>Empresas</li>
                <li>Profesionales</li>
                <li>Contacto</li>
            </ul>
        </header>
        </div>
    );
}

export default Header;