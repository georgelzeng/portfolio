import React from 'react';

import './App.css';
import Navbar from './components/Navbar'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import Footer from './components/Footer'



class App extends React.Component {

  componentWillMount() {
    document.title = 'George Zeng'
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </div>
    );
  }
}

export default App;