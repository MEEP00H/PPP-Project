import React from 'react';
import '../settingBg.css';
import './timeLine.css';


const TimeLine = (props) => {

    return (
        <div className = 'bgTimeLine' id = 'timeLine'>
            <h3 className = 'experience'>Experiences</h3>
             <div className ="timeline">
                    {Array.from(props.experience).map((exp, index) => {
                            if(index % 2 === 0){
                                return (
                                    <div key = {index} className ="container left">
                                        <div className="content">
                                            <h2 className ='expName'>{exp.name}</h2>
                                            <small>@{exp.location}</small>
                                            {exp.details.map((detail, index) => {
                                                return(
                                                    <p key = {index}>{detail}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                );
                            }else{
                                return(
                                    <div key = {index} className ="container right">
                                        <div className ="content">
                                            <h2 className ='expName'>{exp.name}</h2>
                                            <small>@{exp.location}</small>
                                            {exp.details.map((detail, index) => {
                                                return(
                                                    <p key = {index}>{detail}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                
                                )}
                    })}    
            </div>
        </div>
    );
}

export default TimeLine;