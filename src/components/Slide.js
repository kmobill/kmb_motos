import React from 'react'
import "./Slide.css";
const Slide = (props) => {
  return (
    <>
        <div className="big__image">
            <img src={require("../images/parte 1/slides de home/"+props.name+".jpg")} alt=""/>
        </div>
    </>
  )
}

export default Slide