import React from 'react'
import "./Banner.css"
const Banner = () => {
  return (
    <>
        <div className='banner__container'>            
            <img className='img__banner img__slide' src={require("../../images/tallerPage/1.png")}/>
            <div className='img__titulo__container'>
              <img className='img__banner img__titulo_taller' src={require("../../images/tallerPage/2.png")}/>
            </div>                        
            <img className='img__banner img__marcas' src={require("../../images/tallerPage/3.png")}/>
            <div className='banner_text'>
              <img className='img__banner img__banner__text' src={require("../../images/tallerPage/4.png")}/>
              <p>Cada cierto tiempo tu moto exige un chequeo integral en el cual podamos evidenciar los cambios necesarios para alargar la vida útil de tu motocicleta.</p>
            </div>
        </div>
    </>
  )
}

export default Banner