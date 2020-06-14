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

    if(heightParallax.offsetWidth < 800){
        if(window.scrollY < 350){
            moonElem.style.transform = `translate(${window.scrollY * 0.65}%, ${window.scrollY * -0.85}%)`;
            wishElem.style.transform = `translateY(${window.scrollY * -2}%`;
        }
   }
    //IPhoneX
   if(heightParallax.offsetWidth === 812){
        if(window.scrollY < 350){
            moonElem.style.transform = `translate(${window.scrollY * 0.55}%, ${window.scrollY * -0.85}%)`;
            wishElem.style.transform = `translateY(${window.scrollY * -2}%`;
        }
    }
    if(heightParallax.offsetWidth === 375){
        if(window.scrollY < 350){
            moonElem.style.transform = `translate(${window.scrollY * 0.55}%, ${window.scrollY * -0.85}%)`;
            wishElem.style.transform = `translateY(${window.scrollY * -2}%`;
        }
    }
    if(heightParallax.offsetWidth === 667){
        if(window.scrollY < 350){
            moonElem.style.transform = `translate(${window.scrollY * 0.85}%, ${window.scrollY * -1.5}%)`;
            wishElem.style.transform = `translateY(${window.scrollY * -2}%`;
        }
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