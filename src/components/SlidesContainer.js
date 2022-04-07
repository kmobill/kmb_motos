import React from 'react'
import Slide from './Slide'
import Carousel from 'react-elastic-carousel';

const SlidesContainer = () => {
  return (
    <Carousel>
        <Slide name = "home1"/>
        <Slide name = "home2"/>
        <Slide name = "home3"/>
    </Carousel>
  )
}

export default SlidesContainer