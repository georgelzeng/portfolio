import React, {Component} from 'react';
import {Container, Image, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

import ucb from '../assets/ucb.jpg'

class EducationCard extends Component {
    render() {
        return(
            <Container className='education-row'>
                <Image className='education-card-img' src={ucb}/>
                <Col className='education-col'> 
                    <Row>
                        <p className='education-name'>University of California Berkeley</p>
                    </Row>
                    <Row>
                        <text className='education-bullet' > > </text>
                        <Col>
                            <p className='education-year'>Class of 2019, B.A. Computer Science</p>
                        </Col>
                    </Row> 
                    <Row>
                        <text className='education-bullet' > > </text>
                        <Col>
                            <p className='education-gpa'>GPA: 3.6</p>
                        </Col>
                    </Row> 
                    <Row>
                        <text className='education-bullet' > > </text>
                        <Col>                        
                            <p className='education-classes'>
                            CS Classes: Software Engineering (CS 169), Cybersecurity (CS 161), Algorithms and Intractable Problems (CS 170), Artificial Intelligence (CS 188), Operating Systems (CS 162)
                            </p> 
                        </Col>
                    
                    </Row> 


                </Col>
            </Container>
        )
    }
}

export default EducationCard