import React from 'react';
import './contract.css';
import '../settingBg.css';

const contract = (props) => {
    
    return (
        <div className = 'bg' id = 'contract'>
            <div className = 'flex-container'>
                <div className = 'contracts'>
                    <div className = 'address'> {props.contract.address}</div>
                    <div className = 'facebook'>{props.contract.facebook}</div>
                    <div className = 'git'>{props.contract.github}</div>
                    <div className = 'mail'>{props.contract.mail}</div>
                    <div className = 'phone'>{props.contract.phone}</div>
                </div>
            </div>
        </div>
    )
}   

export default contract;