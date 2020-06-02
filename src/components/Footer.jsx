import React from 'react';
import backToTopIcon from './Svgs';

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src="logo-bg.png" alt="logo" />    
            </div>
            <p>Copyright © <span >Skillwave</span> - By Hernan Clich</p>
            <a className={`none`} href="#hero">{backToTopIcon()}</a>
        </footer>
    );
}

export default Footer;