import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


import phoenix from '../assets/phoenix.png';
import axon from '../assets/axon.jpeg';
import hive from '../assets/hive.png';
import ResumeCard from '../components/ResumeCard'
import EducationCard from '../components/EducationCard'
import Titlecard from '../components/Titlecard'

const resumeCardsInfo= {
    'hive': {'img': hive, 'company': 'Hive', 'position': 'Associate Product Manager', 'date': 'Jul 2019-Apr 2020', 'text': 'Facilitated development of content moderation CV models'},
    'axon': {'img': axon, 'company': 'Axon', 'position': 'Software Engineering Intern', 'date': 'Jun 2018-Aug 2018', 'text': 'Developed object detection model for driver license cards'},
    'phoenix': {'img': phoenix, 'company': 'Phoenix Consulting', 'position': 'President/Co-Founder', 'date': 'Apr 2016-May 2019', 'text': 'Built life sciences strategy consulting group and led client engagement for Kaiser Permanente'},
}


class ResumePage extends Component {
    
    render() {
        return (

                <Container className='resume-page'>
                    <Titlecard title='Resume'/>
                    <Row>
                        <EducationCard />
                    </Row>
                    <Row className='resume-row'>
                        <ResumeCard 
                            img={resumeCardsInfo.hive.img} 
                            company={resumeCardsInfo.hive.company} 
                            position={resumeCardsInfo.hive.position} 
                            date={resumeCardsInfo.hive.date} 
                            text={resumeCardsInfo.hive.text}/> 
                        <ResumeCard 
                            img={resumeCardsInfo.axon.img} 
                            company={resumeCardsInfo.axon.company} 
                            position={resumeCardsInfo.axon.position} 
                            date={resumeCardsInfo.axon.date} 
                            text={resumeCardsInfo.axon.text}/> 
                        <ResumeCard 
                            img={resumeCardsInfo.phoenix.img} 
                            company={resumeCardsInfo.phoenix.company} 
                            position={resumeCardsInfo.phoenix.position} 
                            date={resumeCardsInfo.phoenix.date} 
                            text={resumeCardsInfo.phoenix.text}/> 
                    </Row>
                    <Row className='resume-button-row'>
                        <a href="something" class="button2">SWE Resume</a>
                        <a href="something" class="button2">PM Resume</a>
                    </Row>
                </Container>

        )
    }
}

export default ResumePage;