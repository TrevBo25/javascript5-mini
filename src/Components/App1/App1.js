import React, { Component } from 'react';
import './App1.css';

class App1 extends Component {
  constuctor(props) {

    this.state = {
      myName: 'Joe'
    }
  }
  render() {
    return (
      <div className="App1">
        My name is { this.state.myName }
      </div>
    );
  }
}

export default App1;
