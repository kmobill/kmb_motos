import React from 'react'
import Banner from './Banner'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContainerBox_taller from './ContainerBox_taller'
import "./Taller.css"
const Taller = () => {
  return (
    <div className='banner__container'>
      <Navbar/>
        <Banner/>
        <ContainerBox_taller/>
      <Footer/>
    </div>
  )
}

export default Taller