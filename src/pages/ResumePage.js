import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class ResumePage extends Component {
    render() {
        return (
            <div className='resume-page'> 
                <Container>
                    <Row>
                        <Col>Education</Col>
                        <Col>Hive</Col>
                        <Col>Axon</Col>
                    </Row>
                    <Row>
                        <Col>Resume1</Col>
                        <Col>Resume2</Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default ResumePage;