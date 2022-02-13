import React, { Component } from "react";
import './styleTestymonie.css'
import Slider from "react-slick";
import { Button, Card, Col } from 'react-bootstrap'
import slidevbc1 from '../../assets/images/slidevbc1.png'
import slidevbc2 from '../../assets/images/slidevbc2.png'
import slidevbc3 from '../../assets/images/slidevbc3.png'
import slidevbc4 from '../../assets/images/slidevbc4.png'


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Quelques temoignages de nos étudiants </h2>
        <Slider {...settings}>
            <Col md={4}>
            <Card className={'m-2'} >
                <Card.Img variant="top" src={slidevbc1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>

            </Col>
            <Col md={4}>
            <Card className={'m-2'}>
                <Card.Img variant="top" src={slidevbc2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className={'m-2'}>
                <Card.Img variant="top" src={slidevbc3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card className={'m-2'}>
                <Card.Img variant="top" src={slidevbc4} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
       
          
        </Slider>
      </div>
    );
  }
}