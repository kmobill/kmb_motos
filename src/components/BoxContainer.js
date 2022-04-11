import React from 'react'
import Box from './Box'
import "./BoxContainer.css"
const BoxContainer = () => {
  return (
    <div className="part3">
      <Box 
      name = "AGENDAMIENTO DE CITAS"
      url = "agendamiento_citas"
      />  
      <Box 
      name = "HAZTE SOCIO"
      url = "hazte_socio"
      />
      <Box 
      name = "QUIERO UNA FRANQUICIA"
      url = "quiero_franquicia"
      />
      <Box 
      name = "PATIO MOTOS" 
      url = "patio_motos"
      last ={true}
      />
    </div>
  )
}

export default BoxContainer