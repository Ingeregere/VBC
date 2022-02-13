import React from 'react'
import './styleCourse.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import slidevbc1 from '../../assets/images/slidevbc1.png'
import slidevbc2 from '../../assets/images/slidevbc2.png'
import slidevbc3 from '../../assets/images/slidevbc3.png'
import slidevbc4 from '../../assets/images/slidevbc4.png'

function Course() {
  return (
    <Container className={'mt-3'}>
        <h2 className={'text-center'}> <u className={'underlineCourse'}>Les cours de VBC international</u></h2>
        <Row>
            <Col md={3}>
            <Card className={'mb-3'}>
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
            <Col md={3}>
            <Card className={'mb-3'}>
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
            <Col md={3}>
            <Card className={'mb-3'}>
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
            <Col md={3}>
            <Card className={'mb-3'}>
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
        </Row>
    </Container>
  )
}

export default Course