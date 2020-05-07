import React, { Component } from 'react'
import Scroll, {Link} from 'react-scroll'

class Navbar extends Component {

    render() {
    return (
        <nav className='nav'>
            <div className='nav-content'>
                <div className='nav-logo'>
                    <Link className='nav-item'
                        activeClass='active'
                        to='App'
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={0}
                        duration={500}>
                        <span>GEORGE ZENG</span>
                    </Link> 
                </div>

                <div className='nav-text-container'>
                    <Link className='nav-item'
                    activeClass='active'
                    to='about-row'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-180}
                    duration={500}>
                        <span>ABOUT</span>
                    </Link> 
                    <Link className='nav-item'
                    activeClass='active'
                    to='resume-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-150}
                    duration={500}>
                        <span>RESUME</span>
                    </Link> 
                    <Link className='nav-item'
                    activeClass='active'
                    to='projects-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-150}
                    duration={500}
                    style={{'margin':0}}>
                        <span>PROJECTS</span> 
                    </Link>                    

                </div>

            </div>
        </nav>
 
        )
    }
}

export default Navbar;
