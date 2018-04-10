import React, { Component } from 'react';
import './App3.css';
import Movie from 'Movie';

class App3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badMovies: ['Battlerield Earth', 'Catwoman', 'The Last Airbender']
    }
  }

  render() {

    const badMovies = this.state.badMovies.map( movie => {
      <Movie movie={movie} />
    })

    return (
      <div className="App3">
        <h1>Terrible Movies List:</h1>
        [badMovies]
      </div>
    );
  }
}

export default App3;