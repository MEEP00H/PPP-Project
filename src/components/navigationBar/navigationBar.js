import React from 'react';
import './navigationbar.css';

const navigationBar = () =>{
    return(
        <div className = 'navigate'>
            <a href = '#page1' className = 'tag1'>Profile</a>
            <a href = '#skills' className = 'tag2'>/Skills</a>
            <a href = '#timeLine' className = 'tag3'>/Experience</a>
            <a href = '#gallery' className = 'tag4'>/My Gallery</a>
            <a href = '#contract' className = 'tag5'>/Contract</a>
        </div>
    );
}

export default navigationBar;