import React from 'react';

import ColoredLine from '../components/Line';
import EnterButton from '../components/EnterButton'

function HomePage() {
    return (
      <div className='homePage'>
          <h1 className='hey' id='h1Text' >Hey!</h1>
          <h2 className='im-george' id='h2Text'>I'm George.</h2>
          <h3 className='im-a' id='h3Text' > I'm a software engineer and a product manager passionate about building cool things. </h3>
          <ColoredLine color={'white'} height={1} width={200} />
          <EnterButton />
      </div>
    );
}

export default HomePage;