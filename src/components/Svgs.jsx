import React from 'react';

function backToTopIcon() {
    return (
        <svg className="back-top" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#0092D0"/>
            <g filter="url(#filter0_d)">
            <path d="M50.5 25L20 65H36.5761L50.5 46.7391L64.4239 65H81L50.5 25Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d" x="16" y="25" width="69" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>
    );
}

function openQuotes () {
    return (
        <svg className="open-quotes" width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6531 8.39999C16.5198 9.06666 13.6531 10.5333 12.0531 12.8C10.5865 14.9333 9.85313 18.6667 9.85313 24H20.0531V43H0.453125V27C0.453125 18.3333 2.05313 11.8 5.25313 7.39999C8.45313 3 13.5865 0.799996 20.6531 0.799996V8.39999ZM49.4531 8.39999C45.3198 9.06666 42.4531 10.5333 40.8531 12.8C39.3865 14.9333 38.6531 18.6667 38.6531 24H48.8531V43H29.2531V27C29.2531 18.3333 30.8531 11.8 34.0531 7.39999C37.2531 3 42.3865 0.799996 49.4531 0.799996V8.39999Z" fill="#005491"/>
        </svg>
    );
}

function prevArrow () {
    return (
        <svg className="arrow prev-slide" width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2105 42L0 21L20.2105 0L24 3.9375L7.57895 21L24 38.0625L20.2105 42Z" fill="#00648F"/>
        </svg>
    );
}

function nextArrow () {
    return (
        <svg className="arrow next-slide" width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.78947 42L24 21L3.78947 0L0 3.9375L16.4211 21L0 38.0625L3.78947 42Z" fill="#00648F"/>
        </svg>
    );
}


export {openQuotes, prevArrow, nextArrow, backToTopIcon as default };