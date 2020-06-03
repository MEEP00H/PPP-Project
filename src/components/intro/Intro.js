import React from 'react'
import './Intro.css';

function onScroll(){

    const moonElem = document.querySelector('.moon');
    const wishElem = document.querySelector('.wish');
    const heightParallax = document.querySelector('.parallax');

    if(window.scrollY * 3  < heightParallax.offsetWidth){

        moonElem.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.75}%)`;
        wishElem.style.transform = `translateY(${window.scrollY * -1.5}%`;
        
    }
   

    
}

function parallaxMove(){
    document.addEventListener('scroll', onScroll);
}

const Intro = () => {

    parallaxMove();

    return (
        <div className = "parallax">
            <div className = "mountain"></div>
            <h1 className = "wish">Welcome to my port</h1>
            <div className = "moon"></div>
        </div>
    );
}

export default Intro;