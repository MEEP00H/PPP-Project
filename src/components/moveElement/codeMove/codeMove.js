import React, { Component } from 'react';
import './codeMove.css';

function moveElem(){
    const codeElem = document.querySelector('.codeEle');
    let roll = 0;
    setInterval(() => rollingElem(), 10);

    function rollingElem(){
        roll++;
        codeElem.style.transform = `rotate(${roll}deg)`;
    }
}

export default class CodeMove extends Component {

    componentDidMount(){
        moveElem();
    }

    render(){
        return (
            <div className = 'codeEle'/>
        )
    }
   
}

