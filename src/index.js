import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.querySelector('#root'));

// Required to change the Navbar color after scrolling out the hero section

const navBar = document.querySelector('.navbar-desktop');
const hero = document.querySelector('.hero');
let logoImg = document.querySelector('.logo-img');

const heroOptions = {
    root: null,
    threshold: 0.13,
    rootMargin: '0px'
};

const heroObserver = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navBar.classList.add('secondary');
            logoImg.setAttribute("src", "/logo-hor-inv.png");
        } else if (entry.isIntersecting && entry.target.classList.contains('hero')) {
            navBar.classList.remove('secondary');
            logoImg.setAttribute("src", "/logo-hor.png");
        }
    });
}, heroOptions);

heroObserver.observe(hero);

// Required to animate hamburguer icon

const burgerContainer = document.querySelector('.burger-cont');
const openMobileNav = document.querySelector('.navbar-mobile ul');
let isNavBarOpen = false;

burgerContainer.addEventListener('click', () => {
    if(!isNavBarOpen){
        openMobileNav.classList.remove('closed');
        openMobileNav.classList.add('open');
        burgerContainer.classList.add('open');
        isNavBarOpen = true;
    } else {
        openMobileNav.classList.remove('open');
        openMobileNav.classList.add('closed');
        burgerContainer.classList.remove('open');
        isNavBarOpen = false;
    }
});
