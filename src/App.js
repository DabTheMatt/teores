import './App.css';
import React, { Component } from 'react';
import Board from "./components/Board";
import InputForm from "./components/InputForm";

class App extends Component {
  state = {
    player1name: "",
    player2name: ""
  }

  createPlayers = (first, second) => {
      console.log("first + second", first, second);
      this.setState({
        player1name: first,
        player2name: second
      })
  }



  render() {
    return (
      <div>
      <InputForm createPlayers={this.createPlayers}/>
      <Board 
      player1={this.state.player1name}
      player2={this.state.player2name}
      />
    </div>
    );
  }
}

export default App;
