import React, {Component} from 'react';

class Decrementor extends Component{
    render(){        
        //const decrease = this.props.decrease;
        const {decrease} = this.props;

        return(
           <button onClick={decrease} className='decrement'>
           - -
           </button>
        );
    }
}

export default Decrementor;