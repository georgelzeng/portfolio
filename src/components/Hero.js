import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';

import Carousel from './Carousel'

function Hero(props) {
    return(
        <div>
            <Jumbotron className='jumbotron-fluid p-0'>
                <Container>
                    <Row>
                        <Col>
                            {props.title && <h1 className='display-4'>{props.title}</h1>}
                            {props.description && <h2 className='font-weight-light'>{props.description}</h2>}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Carousel />
        </div>
    );
}

export default Hero;