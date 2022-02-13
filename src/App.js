import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Course from './Component/CardCourse';
import ControlledCarousel from './Component/Carousel';
import Navbars from './Component/Navbar';
import Testymonie from './Component/Testymonie';
import { Container } from 'react-bootstrap';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbars />
      <ControlledCarousel />
      <Course />
      <Container>
       <Testymonie />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
