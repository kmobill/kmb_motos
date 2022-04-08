import React from 'react';
import logo_ubicacion from "../images/parte 4/icono ubicación.png";
import logo_redes from "../images/parte 4/icono redes sociales.png";
import "./Footer.css"
function Footer() {
  return (
    <>
    <div className="part4">
            <div className="footer">
                <div className="footer__infoText">
                    <h3>Quienes somos</h3>
                    <h3>Misión</h3>
                    <h3>Visión</h3>
                    <h3>Contáctanos</h3>
                </div>
                <div className="footer__ubication">
                    <h3>Ubicación</h3>
                    <div className="icon__ubication">
                        <img src={logo_ubicacion} alt="">
                        </img>
                    </div>
                    <h3>kmbmotos@kimobill.com</h3>
                    <h4>kmbmotos 2022</h4>
                </div>
                <div className="footer__socialMedia">
                    <h3>Redes Sociales</h3>
                    <div className="icon__ubication">
                        <img src={logo_redes} alt="">
                        </img>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Footer