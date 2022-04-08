import React from 'react'
import CardsContainer from '../../components/CardsContainer';
import SlidesContainer from '../../components/SlidesContainer';
import BoxContainer from '../../components/BoxContainer';
import "./Home.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Home = () => {
  return (
    <div className='container'>
        <Navbar></Navbar>
        <SlidesContainer></SlidesContainer>
        <CardsContainer></CardsContainer>
        <BoxContainer/>
        <Footer></Footer>
    </div>
  )
}

export default Home