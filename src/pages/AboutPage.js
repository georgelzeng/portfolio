import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Carousel from '../components/Carousel';
import Titlecard from '../components/Titlecard';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';


class AboutPage extends Component {
    render() {
        return (
                <Container className = 'about-page'>
                    <Titlecard color='cornflowerblue' title='About'/>
                    <Row className = 'about-row'> 
                        <Carousel/>
                        <Col className='about-text-col'>
                            <Row className='about-text-row'>
                                <Col className='bullet-text-col'>
                                    <p className='bullet-text mb-2' id='h3Text' align='left' >Looking for Opportunties</p>
                                </Col>
                            </Row>
                            <Row className='about-text-row'>
                                <Col className='bullet-text-col'>
                                    <p className='bullet-text mb-2' id='h3Text' align='left' >Ex-Product @ <mark id='Hive'>Hive</mark>, Ex-Software @ <mark id="Axon">Axon</mark></p>
                                </Col>
                            </Row>
                            <Row className='about-text-row'>
                                <Col className='bullet-text-col'>
                                    <p className='bullet-text mb-2' id='h3Text' align='left' >Former President @ <a href='https://phoenix.berkeley.edu' target="_blank"><mark id='Phoenix'>Phoenix Consulting</mark></a></p>
                                </Col>
                            </Row>
                            <Row className='about-text-row'>
                                <Col className='bullet-text-col'>
                                    <p className='about-short-text' align='left' id='h3SubtitleText' >   My name is George, and I am a PM and an engineer professionally. In my free time, I like to snowboard, cook, and listen to EDM.</p>
                                </Col>
                            </Row>
                            <Row className='icon-row'>
                                <a href='https://www.linkedin.com/in/georgelz' target="_blank"> <Image className='icon' src={linkedin}/></a>
                                <a href='mailto:georgelzeng@gmail.com' target="_blank"> <Image className='icon' src={email}/></a>
                                <a href='https://www.github.com/georgelzeng' target="_blank"> <Image className='icon' src={github}/></a>                            
                            </Row>
                        </Col>
                    </Row>
                </Container>
        )

    }
}

export default AboutPage;