import React from 'react';

const Card = (props) => {
  return (
    <div className='service__cards'>
        <div className="card">
            <img src={require("../images/parte 2/cuadro de base para servicios.png")} alt=""></img>
            <div className ="card__title">
                <img src={require('../images/parte 2/'+props.name+'.png')} alt=""></img>
            </div>
            <p>
              {props.content}
            </p>
            <div className ="bottom__button">
                <img src={require('../images/parte 2/boton de acceder.png')} alt=""></img>                
            </div>
        </div>
    </div>
  )
}

export default Card