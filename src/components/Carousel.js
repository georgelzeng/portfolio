import React, {Component} from 'react';
import about_pic from '../assets/about_pic.JPG'
import squaw from '../assets/squaw.JPG'
import grad from '../assets/grad.jpg'
import nyc from '../assets/nyc.JPG'
import {Image, Col} from 'react-bootstrap';


const fadeImages = [
  about_pic, 
  squaw, 
  grad, 
  nyc
]; 

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: ['fadeIn', 'invisible', 'invisible', 'invisible'],
            index: 0,
            next: 1
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.changePicture(), 
            4000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    changePicture() {
        const changeIndexes = () => {
            var newArr = this.state.arr;
            newArr[this.state.index] = 'fadeOut'
            newArr[this.state.next] = 'fadeIn'
            this.setState({arr: newArr})


            const makeInvisible = () => {
                console.log(this.state.index)
                var newArr = this.state.arr;
                newArr[this.state.index] = 'invisible'
                this.setState({arr: newArr})
                this.state.index = this.state.next;
                this.state.next = (this.state.next + 1 >= this.state.arr.length) ? 0 : this.state.next + 1
            }

            setTimeout(makeInvisible, 1500)
        }
        changeIndexes()
  }
  
    render() {
        return (
            <Col className='about-pic-col'>
                <Image fluid className='about-picture' id={this.state.arr[0]} src={fadeImages[0]} />
                <Image fluid className='about-picture' id={this.state.arr[1]} src={fadeImages[1]} />
                <Image fluid className='about-picture' id={this.state.arr[2]} src={fadeImages[2]} />
                <Image fluid className='about-picture' id={this.state.arr[3]} src={fadeImages[3]} />
            </Col>
        )

    }
}



export default Carousel;