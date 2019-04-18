import React, { Component } from 'react';
import './App.scss';
import Part1 from './part1/Part1';
// import Part2 from './part2/Part2';
// import Part3 from './part3/Part3';
// import Part4 from './part4/Part4';

const img = require('./assets/hook.jpg');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>React Hooks</h1>
          <img src={img} alt='HOOKS!' />
        </header>
        <Part1 />
      </div>
    );
  }
}

export default App;
