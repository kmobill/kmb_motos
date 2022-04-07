import React from 'react'
import Box from './Box'
const BoxContainer = () => {
  return (
    <div className="part3">
      <Box name = "AGENDAMIENTO DE CITAS"/>  
      <Box name = "HAZTE SOCIO"/>
      <Box name = "QUIERO UNA FRANQUICIA"/>
      <Box name = "PATIO MOTOS" last ={true}/>
    </div>
  )
}

export default BoxContainer