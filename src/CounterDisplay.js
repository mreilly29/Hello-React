import React, {Component} from 'react';

class CounterDisplay extends Component{
    render(){
        return(
            <div className='count'>
            {this.props.current}
            </div>
        );
    }
}

export default CounterDisplay;