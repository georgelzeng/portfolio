import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';

class ResumeButton extends Component {
    render() {
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
}

export default ResumeButton;