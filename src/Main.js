import React, {Component} from 'react';
import Counter from './Counter';
import './Main.css';

class Main extends Component{
    render(){
        return(
            <main className='main'>
            <Counter />
            </main>
        );
    }
}

export default Main;