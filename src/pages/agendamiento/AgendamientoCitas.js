import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Form from "../agendamiento/Form";
import "./AgendamientoCitas.css";
const AgendamientoCitas = () => {
  return (
    <>
      <div className='container__AG'>
        <Navbar/>
          <div className='container__AG__banner'>
            <img className='img__AG__banner' src = {require("../../images/agendamientoPage/banner.png")} alt=""/>
          </div>
          <div className='container__AG__titulo'>
            <img className='img__AG__titulo' src = {require("../../images/agendamientoPage/titulo.png")} alt=""/>
          </div>
          <div className='container__AG__subtitulo'>
            <img className='img__AG__subtituloFondo' src= {require("../../images/agendamientoPage/fondo_titulo.png")}alt=""/>
            <img className='img__AG__subtitulo' src={require("../../images/agendamientoPage/subtitulo.png")} alt =""/>
          </div>
          <div>
            <Form content = 'CONSULTA LOS DÍAS Y HORARIOS DISPONIBLES PARA EL AGENDAMIENTO DE CITAS. TAMBIEN PODRAS CONSULTAR LA DISPONIBILIDAD DE TU TALLER PREFERIDO.'/>
          </div>
        <Footer/>        
      </div>
    </>
  )
}

export default AgendamientoCitas