import React from 'react';
import './loading.css';


const loading = () =>{
    return(
        <div className = 'bg-loaded' id= 'load'>
            <div className = 'loaded'>
                <div className="circle">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    </div> 
                <div className="big">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="tri"></div>
                <div className="squ">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="end">
                    <div>P</div>
                    <div>P</div>
                    <div>P</div>
                </div>
            </div>
        </div>
    )
}
export default loading;