import React from 'react';

import ColoredLine from '../components/Line';
import EnterButton from '../components/EnterButton'

function HomePage() {
    return (
        <body className="App-body">
          <p className='hey' style={{"font-size":75}}>Hey!</p>
          <p style={{"font-size":50}}>I'm George.</p>
          <p align="center"> I'm a software engineer and a product manager passionate about building cool things. </p>
          <ColoredLine color={'white'} height={1} width={200} style={{'margin':100}}/>

          <EnterButton />
        </body>
    );
}

export default HomePage;