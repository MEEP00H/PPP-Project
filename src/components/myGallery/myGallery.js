import React from 'react';
import './myGallery.css';
import '../settingBg.css'

const myGallery = (props) => {
    var elements = document.getElementsByClassName("column");
    function four() {
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.flex = "25%";
        }
      }
      four();

    return ( 
        <div className = 'bg-gallery'>
           <div className ="flex-myGallery" id = 'gallery'>
            <div className = "myGallery">My Gallery</div>
            <div className = "img-myGallery">
                { props.myGallery ? (
                    <div className ="gallery">
                        {props.myGallery.map((pics,indexs) => {
                            return (<div className = 'photos' key={indexs}>
                            {pics.map((pic, index) => {
                                return  (
                                        <img src = {pic} alt = 'gallery' className='gallery-Image' key ={index}/>
                                )
                            })}
                            </div>)
                       })}
                    </div>
                ):<div></div>}
            </div>
            </div>
        </div>
    )
}

export default myGallery;