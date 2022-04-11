import React from 'react'
import Box_taller from './Box_taller'
import "./ContainerBox_taller.css";
const ContainerBox_taller = () => {
  return (
    <div className='container__box__taller'>
        <Box_taller 
            name="ABC EXPRESS" 
            content="- Revisión, limpieza y ajuste
            sistema de frenos
          - Reajuste tornillería         
          - Ajuste, regulación y
            lubricación kit de arrastre   
          - Limpieza de bujía   
          - Cambio de aceite            
          - Verificación de fluidos"
            price="18 USD"
        />
        <Box_taller 
            name="ABC GENERAL" 
            content="- Revisión, limpieza y ajuste
            sistema de frenos
          - Reajuste tornillería         
          - Ajuste, regulación y
            lubricación kit de arrastre   
          - Limpieza de bujía   
          - Cambio de aceite            
          - Verificación de fluidos        
          - Chequeo en presión de 
            neumáticos    
          - Chequeo preventivo
          sistema eléctrico"
          price="25 USD"
        />
        <Box_taller 
            name="ABC COMPLETO" 
            content="- Revisión, limpieza y ajuste sistema
            de frenos
          - Limpieza, revisión o cambio de
            filtros (aire, aceite, gasolina)       
          - Limpieza de carburador o sistema
            de inyección 
          - Ajuste, regulación y lubricación de
            cableado (embrague, acelerador) 
          - Chequeo presión neumáticos    
          - Chequeo preventivo del sistema
            eléctrico   
          - Verificación de fluidos
            (frenos, hidráulico)           
          - Cambio de aceite             
          - Limpieza de bujía"
            price="30 USD"
        />
        <Box_taller 
            name="ABC TOTAL" 
            content="- Limpieza de carburador o sistema
            de inyección 
          - Limpieza, revisión o cambio de
            filtros (aire, aceite, gasolina)       
          - Reajuste tornillería         
          - Chequeo presión neumáticos   
          - Ajuste, regulación y lubricación
            kit de arrastre   
          - Ajuste y regulación y lubricación
            de cableado (Embrague,
            acelerador, etc. etc.) 
          - Ajuste y engrase de pistas de
            dirección  
          - Limpieza y ajuste de frenos             
          - Engrasado de ejes de ruedas
            y bastidor      
          - Calibración de válvulas 
          - Chequeo sistema eléctrico          
          - Limpieza de bujías           
          - Regulación de carburador 
          - Verificación y cambio de fluidos
            (frenos, aceite, hidráulico)"
            price="40 USD"
        />
    </div>
  )
}

export default ContainerBox_taller