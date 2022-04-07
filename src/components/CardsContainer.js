import React from 'react';
import Card from './Card';
import Carousel from 'react-elastic-carousel';

const CardsContainer = () => {
  return (
    <div className="part__2">
            <div className="service__title">
                <img src={require("../images/parte 2/servicios.png")} alt=""/>
            </div>
      <div className='service__cards'>
          <Card 
            name = 'taller'
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati unde esse, necessitatibus distinctio iste, vel aspernatur earum mollitia consequatur numquam ullam quibusdam, provident cupiditate id dolorem laudantium sint sed!'
          />
          <Card name = 'repuestos'/>
          <Card name = 'auxilio mecánico'/>
          <Card name = 'courier'/>
      </div>
    </div>
  )
}

export default CardsContainer