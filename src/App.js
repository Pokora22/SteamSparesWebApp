import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/game/game'
import GameList from "./components/gameList/gameList";
import Form from "./components/newGameForm/newGameForm"
import api from "./datastore/stubAPI";

class App extends Component{
  deleteGame = (id) =>{
    api.delete(id)
    this.setState({});
  }

  addNewGame = (name, note, link, code, cost) => {
    api.addGame(name, note, link, code, cost);
    this.setState({});
  };


  render() {
    let games = api.getAll();

    return (
      <div className="App">
        <div className="row container-fluid">
          <Form addHandler={this.addNewGame}/>
          <GameList games={games} deleteHandler={this.deleteGame}/>
        </div>
      </div>
    );
  }
}

export default App;
