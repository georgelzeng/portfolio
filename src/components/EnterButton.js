import React, {Component} from 'react';
import {Link} from 'react-scroll';

class EnterButton extends Component {
    render() {
        return (
            <div id='enterbutton'>
                <Link id='h3SubtitleText'
                    activeClass='active'
                    to='about-page'
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-20}
                    duration={500}>
                        Press to Enter
                </Link>
            </div>
        )
    }
}

export default EnterButton;