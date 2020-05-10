import React, {Component} from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

class ResumeCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
                <Card className='resume-card' style={{ width: '18rem', border:0}}>
                    <Card.Img className='resume-card-img' variant="top" src={this.props.img} />
                    <Card.Body className='resume-card-body'>
                        <Card.Title>{this.props.company}</Card.Title>
                        <Card.Subtitle className='card-position' id='h3SubtitleText'>{this.props.position}</Card.Subtitle>
                        <Card.Text className='card-date' id='h3SubtitleText'>{this.props.date}</Card.Text>
                        <Card.Text className='card-description' id='pText'>
                            {this.props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
        )
    }
}

export default ResumeCard