import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Course from '../../Component/CardCourse';
import ControlledCarousel from '../../Component/Carousel';
import Testymonie from '../../Component/Testymonie';
import { Container } from 'react-bootstrap';

function HomePage() {
  return (
    <>
      <ControlledCarousel />
      <Course />
      <Container>
         <Testymonie />
      </Container>
    </>
  );
}

export default HomePage;
