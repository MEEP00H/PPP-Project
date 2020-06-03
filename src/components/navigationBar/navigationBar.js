import React from 'react';
import './navigationbar.css';

const navigationBar = () =>{
    return(
        <div className = 'navigate'>
            <a href = '#page1' className = 'tag1'>Profile</a>
            <a href = '#skills' className = 'tag2'>/Skills</a>
            <a href = '#timeLine' className = 'tag3'>/Experience</a>
            <a href = '#contract' className = 'tag4'>/Contract</a>
        </div>
    );
}

export default navigationBar;