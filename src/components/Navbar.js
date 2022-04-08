import React from 'react';
import  barra_superior from "../images/parte 1/barra fija parte superior.png";
import btn_auxilio from "../images/parte 1/boton fijo auxilio.png";
import btn_signin from "../images/parte 1/boton fijo inicio de sesión.png";
import "./Navbar.css"
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    const pulsarAuxilio =()=>{
        console.log('pulsado btn auxilio')
    };
    const pulsarSignin =()=>{
        console.log('pulsado btn Sign in')
    }
  return (
    <>
        <div className="img__header">
            <img src={barra_superior} alt="">
            </img>
        </div>
        <div className="header__buttons">
            <Link to="/auxilio mecánico" className="left__button">
                <img 
                    src={btn_auxilio} 
                    onClick ={ ()=> {pulsarAuxilio()}}
                    alt="">
                </img>
            </Link>
            <Link to="/inicio_sesion" className="right__button">
                <img 
                src={btn_signin} 
                onClick = {()=> {pulsarSignin()}}
                alt="">
                </img>
            </Link>
        </div>
      </> 
  )
}

export default Navbar