import React from 'react';
import logo_ubicacion from "../images/parte 4/icono ubicación.png";
import logo_redes from "../images/parte 4/icono redes sociales.png";
function Footer() {
  return (
    <>
    <div class="part4">
            <div class="footer">
                <div class="footer__infoText">
                    <h3>Quienes somos</h3>
                    <h3>Misión</h3>
                    <h3>Visión</h3>
                    <h3>Contáctanos</h3>
                </div>
                <div class="footer__ubication">
                    <h3>Ubicación</h3>
                    <div class="icon__ubication">
                        <img src={logo_ubicacion} alt="">
                        </img>
                    </div>
                    <h3>kmbmotos@kimobill.com</h3>
                    <h4>kmbmotos 2022</h4>
                </div>
                <div class="footer__socialMedia">
                    <h3>Redes Sociales</h3>
                    <div class="icon__ubication">
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