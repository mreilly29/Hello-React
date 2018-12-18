import React, {Component} from 'react';

class Incrementor extends Component{
    render(){
        //const increase = this.props.increase;
        const {increase} = this.props;
        return(
            <button onClick={increase} className='increment'>
             ++
            </button>
        );
    }
}

export default Incrementor;