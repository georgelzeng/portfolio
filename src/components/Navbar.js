import React, { Component } from 'react'
import {Link} from 'react-scroll'
import {Navbar} from 'react-bootstrap'

class ScrollNavbar extends Component {

    render() {
    return (
        <Navbar className='nav'>
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                    <Link className='nav-item'
                    activeClass='active'
                    to='about-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-20}
                    duration={500}>
                        <span>ABOUT</span>
                    </Link> 
                    <Link className='nav-item'
                    activeClass='active'
                    to='resume-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-30}
                    duration={500}>
                        <span>RESUME</span>
                    </Link> 
                    <Link className='nav-item'
                    activeClass='active'
                    to='projects-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-20}
                    duration={500}
                    style={{'margin':0}}>
                        <span>PROJECTS</span> 
                    </Link> 
            </Navbar.Collapse>
            </div> 
            </div>
            </Navbar>
        
        // <nav className='nav'>
        //     <div className='nav-content'>
        //         <div className='nav-logo'>
        //             <Link className='nav-item'
        //                 activeClass='active'
        //                 to='App'
        //                 spy={true}
        //                 smooth={true}
        //                 isDynamic={true}
        //                 offset={0}
        //                 duration={500}>
        //                 <span>GEORGE ZENG</span>
        //             </Link> 
        //         </div>
        //         <div className='nav-text-container'>
        //             <Link className='nav-item'
        //             activeClass='active'
        //             to='about-page'
        //             spy={true}
        //             smooth={true}
        //             isDynamic={true}
        //             offset={-20}
        //             duration={500}>
        //                 <span>ABOUT</span>
        //             </Link> 
        //             <Link className='nav-item'
        //             activeClass='active'
        //             to='resume-page'
        //             spy={true}
        //             smooth={true}
        //             isDynamic={true}
        //             offset={-30}
        //             duration={500}>
        //                 <span>RESUME</span>
        //             </Link> 
        //             <Link className='nav-item'
        //             activeClass='active'
        //             to='projects-page'
        //             spy={true}
        //             smooth={true}
        //             isDynamic={true}
        //             offset={-20}
        //             duration={500}
        //             style={{'margin':0}}>
        //                 <span>PROJECTS</span> 
        //             </Link>                    
        //         </div>
        //     </div>
        // </nav>
        )
    }
}
export default ScrollNavbar;
