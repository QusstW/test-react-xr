import React from 'react'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PCImage from '../../assets/images/PC_Variant1.png'

const Description = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={PCImage} />
                            <Card.Body>
                                <Card.Title>Компьютер в сборке №1</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Button variant="info">AR Mode</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={PCImage} />
                            <Card.Body>
                                <Card.Title>Компьютер в сборке №2</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Button variant="info">AR Mode</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={PCImage} />
                            <Card.Body>
                                <Card.Title>Компьютер в сборке №3</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Button variant="info">AR Mode</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{paddingTop: "40px", }} >
                <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={PCImage} />
                            <Card.Body>
                                <Card.Title>Компьютер в сборке №4</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Button variant="info">AR Mode</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={PCImage} />
                            <Card.Body>
                                <Card.Title>Компьютер в сборке №5</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Button variant="info">AR Mode</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={PCImage} />
                            <Card.Body>
                                <Card.Title>Компьютер в сборке №6</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Button variant="info">AR Mode</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Description