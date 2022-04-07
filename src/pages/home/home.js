import React from 'react'
import CardsContainer from '../../components/CardsContainer';
import SlidesContainer from '../../components/SlidesContainer';
import BoxContainer from '../../components/BoxContainer';
import "./Home.css";
const Home = () => {
  return (
    <>
        <SlidesContainer></SlidesContainer>
        <CardsContainer></CardsContainer>
        <BoxContainer/>
    </>
  )
}

export default Home