import React from 'react';
import './cover-letter.css'

function onScroll(){
    const bgIntroElem =  document.querySelector('.parallax');
    const textIntroElem = document.querySelector('.text');

    const scrollPosition = window.pageYOffset;
    const revealPosition = bgIntroElem.offsetTop + bgIntroElem.offsetHeight / 4 ;
    
    if( scrollPosition >= revealPosition ){
        textIntroElem.classList.add('reveal');
    }
}

function moveIntro(){
    document.addEventListener('scroll', onScroll);
}

const coverLetter = (props) => {

    moveIntro();

    return (
        <div className = 'cover'>
            <div className = 'text'>
                {props.cover}
            </div>
        </div>
    );    
}
export default coverLetter;
