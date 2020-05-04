import React, {Component} from 'react';
import {
    Container, 
    Row, 
    Col
} from 'react-bootstrap';

import about_pic from '../assets/about_pic.JPG'
import Carousel from '../components/Carousel'

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page" fluid> 
                <div>
                    <div className='about-row'>  
                        <div className='about-row-col' id='about-pic-col'>
                            <img className='about-picture' src={about_pic}/>                   
                        </div>
                        <div className='about-row-col' id='about-text-col'>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Currently Exploring Opportunities.</p>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Ex-Product @ <mark id='Hive'>Hive</mark>, Ex-Software @ <mark id="Axon">Axon</mark></p>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Former President of <a id='Phoenix' href='http://phoenix.berkeley.edu/' target='_blank'>Phoenix Consulting Group</a></p>
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Welcome to my personal website! My name is George and I'm from a small town in Central Jersey. 
                            I'm a recent computer science grad from UC Berkeley. </p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>While I was at Axon, I trained CV detection models for use in police body cameras. 
                            This led me to Hive, where I worked with the ML team to build classification models for content moderation.
                            Outside of industry, I cofounded an undergrad strategy consulting 
                            org at Berkeley called Phoenix and led a client engagement with Kaiser Permanente.</p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>I'm currently looking for both product management and software engineering roles. I interested in both and 
                            believe there is a ton to learn in either field. </p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>In my free time, I like to stay healthy by cooking and lifting. I also love to snowboard and have been trying
                            to pick up surfing and wakeboarding (I thought they would be similar - I was wrong).</p>    
                            <p className='mb-2' align='left' style = {{'font-size': 15}}>Anyway, thanks for taking the time to read about my story - I'd also love to hear yours. My socials are linked below;
                            looking forward to connecting!</p>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default AboutPage;