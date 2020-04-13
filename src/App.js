import React, { Component } from "react";
import './App.css';
import Fact from './Fact';


class App extends Component {
  constructor() {
    super()
    this.state = {
      fact: ''
  }
}
    Newfact = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response=>response.json())
      .then(obj => {this.setState({ fact: obj})});
}

  render() {

  return (
    <div>
       <h1 className='tc'>Chuck Norris Facts</h1>
       <Fact
       fact={this.state.fact.value}
       newfact={this.Newfact}
        />

     
    </div>
  );
  }

}

export default App;
