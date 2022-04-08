import React from 'react'
import "./Box_taller.css"
const Box_taller = (props) => {
    const arrayCadenas = props.content.split('-');   

  return (
    <div className='box__container'>          
        <div className='box__title'>
            <h1>{props.name}</h1>
        </div>
        <div className='box__img__fondo'>
            <div className='box__content'> {arrayCadenas.map((cadena,index)=>
                <h3 key={index}>
                    {index==0?"":"-"+cadena}
                </h3>)
            }
            </div>
            <div className='box__price'>
                <h3>{props.price}</h3>
                <div className='box__taller_franja'></div>
            </div>
        </div>
        
        <div className='box__btn'>
            <img className='box__btn__image' src={require("../../images/tallerPage/7.png")}/>
            <h3>Acceder</h3>
        </div>
    </div>
  )
}

export default Box_taller