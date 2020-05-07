import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import filestore from '../assets/filestore.png'
import database from '../assets/database.png'
import eab from '../assets/eab.png'
import Titlecard from '../components/Titlecard'

class ProjectsPage extends Component {
    render() {
        return (
            <Container className='projects-page'>
                <Titlecard color='white' title='Projects' /> 
               <Row className='project-row'> 
                    <p className='project-title' id='h3Text'> Secure File Store</p>
                    <Row className='project-description-row'>
                        <Image className='project-pic' src={filestore}/>
                        <Col className='project-col'>
                            <p id='h3SubtitleText'>Designed and built IND-CPA secure file sharing system that maintained confidentiality, integrity, and authenticity of stored files on a trusted keystore server and an untrusted datastore server. Implemented InitUser, AppendFile, StoreFile, ShareFile, RevokeUser, and more using hMAC.</p>
                            <p id='h3SubtitleText'>Stack: Golang</p>                       
                        </Col>
                    </Row>
               </Row>
               <Row className='project-row'>
                    <p className='project-title' id='h3Text'>Entrepreneurs at Berkeley</p>
                    <Row className='project-description-row'>
                        <Image className='project-pic' src={eab}/>
                        <Col className='project-col'>
                            <p id='h3SubtitleText'>Worked with team to build webapp for members of Berkeley club to find team members. Supported user profiles, user statuses, admins, and user skill matching. Build with ActiveRecord as database.</p>
                            <p id='h3SubtitleText'>Stack: Ruby on Rails, HTML, CSS</p>
                        </Col>
                    </Row>
               </Row>
               <Row className='project-row'> 
                    <p className='project-title' id='h3Text'>Database</p>
                    <Row className='project-description-row'>
                        <Image className='project-pic' src={database}/>
                        <Col className='project-col'>
                            <p id='h3SubtitleText'>Implemented database system using ArrayLists with query language based on SQL. Supported select, create, insert, and joins. </p>
                            <p id='h3SubtitleText'>Stack: Java</p>
                        </Col>
                    </Row>
               </Row>
               <Row className='project-row'>
                    <p className='project-title' id='h3Text'>Personal Website</p>
                    <Row className='project-description-row'>
                    <Image className='project-pic' src={database}/>
                        <Col className='project-col'>
                            <p id='h3SubtitleText'>Website you're currently browsing! Personal portfolio website.</p>
                            <p id='h3SubtitleText'>Stack: Javascript, HTML, CSS, React</p>
                        </Col>
                    </Row>               
               </Row>
            </Container>
        )
    }
}

export default ProjectsPage;