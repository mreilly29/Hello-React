import React, {Component} from 'react';
import CounterContainer from './CounterContainer';
import './Main.css';

class Main extends Component{
    render(){
        return(
            <main className='main'>
                <CounterContainer />
            </main>
        );
    }
}

export default Main;