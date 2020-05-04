import React, {Component} from 'react';
import {Link} from 'react-scroll';

class EnterButton extends Component {
    render() {
        return (
            <div id='enterbutton'>
                <Link
                    activeClass='active'
                    to='about-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={0}
                    duration={500}>
                        enter
                </Link>
            </div>
        )
    }
}

export default EnterButton;