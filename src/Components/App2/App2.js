import React, { Component } from 'react';
import './App2.css';
import FoodItem from './FoodItem';

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteFoods: ['lettuce', 'carrots', 'beets', 'beans', 'air']
    }
  }
  render() {

    const favFoods = this.state.favoriteFoods.map( item, i => {
        return <FoodItem foodItem={item}/>
    })

    return (
      <div className="App2">
        <h1>My Favorite Food List:</h1>
        {favFoods}
      </div>
    );
  }
}

export default App2;
