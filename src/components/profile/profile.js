import React from 'react';
import '../settingBg.css';
import './profile.css';

const profile = (props) => {
    return(
        <div className = 'bg' id = 'page1'>
            <div className = 'flex-container'>
                <div className = 'img'>
                    <img src = {props.profileImg} alt = 'profileImage' className = 'profileImg'/>
                </div>
                <div className ='name'>
                    <p className ='fName'>{props.name.fName}</p>
                    <p className = 'lName'>{props.name.lName}</p>
                    <div className = 'position'>{props.position}</div>
                    <div className = 'nName'>//{props.name.nName}</div>
                </div>
            </div>
        </div>
    );

}

export default profile;