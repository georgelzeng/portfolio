import React, { Component } from 'react'
import Scroll, {Link} from 'react-scroll'

class Navbar extends Component {

    render() {
    return (
        <nav className='nav'>
            <div className='nav-content'>
                <div className='nav-logo'>
                    <Link
                        activeClass='active'
                        to='App'
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={0}
                        duration={500}>
                            GEORGE ZENG
                    </Link> 
                </div>
                <div className='nav-text-container'>
                    <div className='btn btn-one'>
                        <span> Hello</span>
                    </div>

                    <Link className='nav-item'
                    activeClass='active'
                    to='about-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={0}
                    duration={500}>
                        ABOUT
                    </Link> 
                    <Link className='nav-item'
                    activeClass='active'
                    to='resume-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={0}
                    duration={500}>
                        RESUME
                    </Link> 
                    <Link className='nav-item'
                    activeClass='active'
                    to='projects-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={0}
                    duration={500}
                    style={{'margin':0}}>
                        PROJECTS
                    </Link>                    

                </div>

            </div>
        </nav>
 
        )
    }
}

export default Navbar;
