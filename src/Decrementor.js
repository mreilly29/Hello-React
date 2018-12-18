import React from 'react';
/*STATELESS CLASS*/
   const Decrementor = (props) => {        
        //const decrease = this.props.decrease;
        const {decrease} = props;
        return(
           <button onClick={decrease} className='decrement'>
           - -
           </button>
        );
    }


export default Decrementor;