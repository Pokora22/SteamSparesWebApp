import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/game/game'
import GameList from "./components/gameList/gameList";
import Form from "./components/newGameForm/newGameForm"
import api from "./datastore/stubAPI";
import Header from "./components/header/header";

class App extends Component{
  deleteGame = (id) =>{
    api.delete(id)
    this.setState({});
  }

  addNewGame = (name, note, link, code, cost) => {
    api.addGame(name, note, link, code, cost);
    this.setState({});
  };

  updateGame = (id, name, note, link, code, cost, used) => {
    api.update(id, code, link, used, note, cost)
    this.setState({});
  }


  render() {
    let games = api.getAll();
    var used;
    for(let game in games){
      if(game.used === "Used")
        used++;
    }

    return (
      <div className="App">
        <div className="row container-fluid">
          <Header gamesUnused={1} gamesUsed={0} gamesTotal={games.length}/>
        </div>
        <div className="row container-fluid">
          <Form addHandler={this.addNewGame}/>
          <GameList games={games} deleteHandler={this.deleteGame} updateHandler={this.updateGame}/>
        </div>
      </div>
    );
  }
}

export default App;
