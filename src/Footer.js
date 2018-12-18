import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        const {year} = this.props; {/*de-structure the prop*/}

        return(
        <footer className='footer'>
          &copy; {year} Woof Inc.
        </footer>
        );
    }
}

export default Footer;