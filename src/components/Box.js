import React from 'react'

const Box = (props) => {
  return (
    <>
        <div className="box">
                <div className="image">
                    <img src={require("../images/parte 3/"+props.name+".png")} alt=""/>
                </div>
                <div className="box__message">
                    <h1>{props.name}</h1>
                    <div className="bottom__button">
                        <img src={require("../images/parte 2/boton de acceder.png")} alt=""/>
                    </div>
                </div>
        </div> 
    </>
  )
}

export default Box