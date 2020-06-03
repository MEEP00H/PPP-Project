import React from 'react';
import '../settingBg.css';
import './skill.css';

import CodeMove from '../moveElement/codeMove/codeMove';

const programming = (props) => {
    return (
       <div className = 'bg' id = 'skills'>
            <CodeMove/>
            <div className = 'flex-container'>
                <div className = 'title'> 
                    PROGRAMMING SKILLS 
                </div>
                {props.pgSkills ? (
                    <div className = 'skills'>
                        {props.pgSkills.map((skill, index) => {
                            return <div className = 'skill' key = {index}>{skill}</div>
                        })}
                    </div>
                ):(<div>Something went wrong</div>)}
            </div>
       </div>
    )
}

export default programming;