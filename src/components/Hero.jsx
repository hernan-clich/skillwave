import React from 'react';

function Hero() {
    return (
            <div className="hero">
                <h1>DIGITAL SKILLS</h1>
                <p>Animate a nuevas posibilidades</p>
                <video className="hero-bg" autoPlay muted loop>
                <source src="/video.mp4" type="video/mp4"/>
                </video>
                {/* <img className="hero-bg" src="/ocean-918999_1920.png" alt="bg sea pic"/> */}
            </div>
    );
}

export default Hero;