import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import Carousel from '../components/Carousel'

class AboutPage extends Component {
    render() {
        return (
            <Container className='white-section' fluid>
                <Container fluid className = 'about-page'>
                    <Row className = 'about-row'> 
                        <Carousel/>
                        <Col className='about-text-col'>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Currently Exploring Opportunities.</p>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Ex-Product @ <mark id='Hive'>Hive</mark>, Ex-Software @ <mark id="Axon">Axon</mark></p>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Former President of <a id='Phoenix' href='http phoenix.berkeley.edu/' target='_blank'>Phoenix Consulting Group</a></p>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Welcome! My name is George and I'm a recent computer science grad from UC Berkeley. </p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>I worked on training CV detection models for use in policy body cameras at Axon. 
                            This led me to Hive, where I worked with the ML team to build classification models for content moderation.
                            Outside of industry, I cofounded an undergrad strategy consulting 
                            org at Berkeley called Phoenix and led a client engagement with Kaiser Permanente.</p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>I'm currently looking for both product management and software engineering roles. I interested in both and 
                            believe there is a ton to learn in either field. </p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>In my free time, I like to stay healthy by cooking and lifting. I also love to snowboard and have been trying
                            to pick up surfing and wakeboarding (I thought they would be similar - I was wrong).</p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Anyway, thanks for taking the time to read about my story - I'd also love to hear yours. My socials are linked below;
                            looking forward to connecting!</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )

    }
}

export default AboutPage;