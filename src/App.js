import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';


class App extends Component {
  render() {
    const now = new Date();
    const currentYear = now.getFullYear();
    return (
      <div className="App">
        <Header /> {/*this renders the imported file Header */}
        <Main />
        <Footer year ={currentYear} />
      </div>
    );
  }
}

export default App;
