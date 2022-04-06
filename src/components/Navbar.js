import React from 'react';
import "./Navbar.css";
import  barra_superior from "../images/parte 1/barra fija parte superior.png";
import btn_auxilio from "../images/parte 1/boton fijo auxilio.png";
import btn_signin from "../images/parte 1/boton fijo inicio de sesión.png";
function Navbar() {
  return (
      <>
        <div class="img__header">
            <img src={barra_superior} alt="">
            </img>
        </div>
        <div class="header__buttons">
            <div class="left__button">
                <img src={btn_auxilio} alt="">
                </img>
            </div>
            <div class="right__button">
                <img src={btn_signin} alt="">
                </img>
            </div>
        </div>
      </>    
  )
}

export default Navbar