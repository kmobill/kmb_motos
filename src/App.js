import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import CardsContainer from './components/CardsContainer';
import SlidesContainer from './components/SlidesContainer';
import BoxContainer from './components/BoxContainer';
import Home from './pages/home/Home';
import Container_Carousel from './components/Container_Carousel';
function App() {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <Home/>
      <Footer></Footer>
    </div>
  );
}

export default App;
