import React from 'react'
import Slide from './Slide'
import Carousel from 'react-elastic-carousel';
import "./SlidesContainer.css"
const SlidesContainer = () => {
  return (
    <Carousel 
      itemsToShow={1} 
      pagination={false}
      showArrows={true}
      disableArrowsOnEnd={false}
      autoTabIndexVisibleItems={false}
      preventDefaultTouchmoveEvent={true}
    >
      <Slide name = "home1"/>
      <Slide name = "home2"/>
      <Slide name = "home3"/>
    </Carousel>
  )
}

export default SlidesContainer