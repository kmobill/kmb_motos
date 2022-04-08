import React from 'react';
import {
  Link
} from "react-router-dom";
import "./Card.css";
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
            <Link to={"./"+props.name} className ="bottom__button">
                <img src={require('../images/parte 2/boton de acceder.png')} alt=""></img>                
            </Link>
        </div>
    </div>
  )
}

export default Card