import React, { Component } from 'react';
import './App4.css';
import axios from 'axios';

class App4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp4.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res
      })
    })
  }

  render() {
    return (
      <div className="App4">
        <button onClick={this.getCars}>Get cars</button>
        {this.state.cars}
      </div>
    );
  }
}

export default App4;
