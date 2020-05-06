import React from 'react';
// import {
//   BrowserRouter as Router, 
//   Switch, 
//   Route, 
// } from "react-router-dom";
import './App.css';
import {Link} from 'react-scroll'
import {Container} from 'react-bootstrap'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import HobbiesPage from './pages/HobbiesPage'
// import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'George Zeng', 
      headerLinks: [
        {title: 'Resume', path: '/'}, 
        {title: 'Projects', path: '/'}, 
        {title: 'About', path: '/about'}
      ], 
      home : {
        title: 'George Zeng', 
        description: 'personal website'
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <HomePage />
        <SectionTwo />
        <SectionThree />

      </div>
    );
  }
}

export default App;

      // <Router>
      //   <Container className="p-0" fluid={true}>
      //     <Navbar className="border-bottom" bg='transparent' expand='md'>
      //       <Navbar.Brand>George Zeng</Navbar.Brand>
      //       <Navbar.Toggle className='border-0' aria-controls="navbar-toggle"/> 
      //       <Navbar.Collapse id = 'navbar-toggle'>
      //         <Nav className='ml-auto'>
      //           <Link className='nav-link' to="/">Home</Link>
      //           <Link className='nav-link' to="/resume">Resume</Link>
      //           <Link className='nav-link' to="/projects">Projects</Link>
      //         </Nav>
      //       </Navbar.Collapse>
      //     </Navbar>

      //     <Route path="/" exact render={()=> <HomePage title={this.state.home.title} description={this.state.home.description}/>} />
      //     <Route path="/resume" exact render={()=> <ResumePage title={this.state.home.title}/>} />
      //     <Route path="/projects" exact render={()=> <ProjectPage title={this.state.home.title}/>} />

      //     <Footer />
      //   </Container>
      // </Router>