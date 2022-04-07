import React from 'react';
import Card from './Card';
import Carousel from 'react-elastic-carousel';

const CardsContainer = () => {
  return (
    <div className="part__2">
            <div className="service__title">
                <img src={require("../images/parte 2/servicios.png")} alt=""/>
            </div>
      <Carousel 
        className='service__cards'
        itemsToShow={4} 
        pagination={false}
        showArrows={false}
        autoTabIndexVisibleItems={false}
        preventDefaultTouchmoveEvent={true}
      >
          <Card 
            name = 'taller'
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati unde esse, necessitatibus distinctio iste, vel aspernatur earum mollitia consequatur numquam ullam quibusdam, provident cupiditate id dolorem laudantium sint sed!'
          />
          <Card 
            name = 'repuestos'
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati unde esse, necessitatibus distinctio iste, vel aspernatur earum mollitia consequatur numquam ullam quibusdam, provident cupiditate id dolorem laudantium sint sed!'
          />
          <Card 
            name = 'auxilio mecánico'
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati unde esse, necessitatibus distinctio iste, vel aspernatur earum mollitia consequatur numquam ullam quibusdam, provident cupiditate id dolorem laudantium sint sed!'          
          />
          <Card 
            name = 'courier'
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati unde esse, necessitatibus distinctio iste, vel aspernatur earum mollitia consequatur numquam ullam quibusdam, provident cupiditate id dolorem laudantium sint sed!'
          />
          <Card 
            name = 'courier'
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati unde esse, necessitatibus distinctio iste, vel aspernatur earum mollitia consequatur numquam ullam quibusdam, provident cupiditate id dolorem laudantium sint sed!'
          />
          <Card 
            name = 'courier'
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati unde esse, necessitatibus distinctio iste, vel aspernatur earum mollitia consequatur numquam ullam quibusdam, provident cupiditate id dolorem laudantium sint sed!'
          />
      </Carousel>
    </div>
  )
}

export default CardsContainer