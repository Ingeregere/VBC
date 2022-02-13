import React ,{useState} from 'react'
import { Carousel } from "react-bootstrap";
import './styleCarousel.css'
import slidevbc1 from '../../assets/images/slidevbc1.png'
import slidevbc2 from '../../assets/images/slidevbc2.png'
import slidevbc3 from '../../assets/images/slidevbc3.png'
import slidevbc4 from '../../assets/images/slidevbc4.png'




function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className={'mt-3'}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slidevbc4}
            alt="Four slide"
          />
          <Carousel.Caption variant='dark' color={'dark'}>
            <h3>First slide VBC</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slidevbc1}
            alt="First slide"
          />
          <Carousel.Caption variant='dark' color={'dark'}>
            <h3>First slide VBC</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slidevbc2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide VBC</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slidevbc3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide VBC</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel