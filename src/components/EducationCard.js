import React, {Component} from 'react';
import {Container, Image, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

import ucb from '../assets/ucb.png'

class EducationCard extends Component {
    render() {
        return(
            <Row className='education-row'>
                <Image className='education-card-img' src={ucb}/>
                <Col className='education-col'> 
                    <p className='education-name' id='h3Text'>University of California Berkeley</p>
                    <Col>
                        <p className='education-year' id='h3SubtitleText'>Class of 2019, B.A. Computer Science <i class="em em-robot_face" aria-role="presentation" aria-label="BIRD"></i></p>
                    </Col>
                    <Col>
                        <p className='education-gpa' id='h3SubtitleText'>GPA: 3.6</p>
                    </Col>
                    <Col>                        
                        <p className='education-classes' id='h3SubtitleText'>
                        CS Classes: Software Engineering (CS 169), Cybersecurity (CS 161), Algorithms and Intractable Problems (CS 170), Artificial Intelligence (CS 188), Operating Systems (CS 162)
                        </p> 
                    </Col>
                </Col>
            </Row>
        )
    }
}

export default EducationCard