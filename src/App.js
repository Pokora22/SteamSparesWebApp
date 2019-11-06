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

  addNewGame = (gameData) => {
    api.addGame(gameData);
    this.setState({});
  };

  updateGame = (gameData) => {
    api.update(gameData)
    this.setState({});
  }

  updateGameCounter = (games) =>{
    let used = 0;
    games.forEach(g=> {
      if(g.used)
        used++;
    });

    return used;
  }

  render() {
    let games = api.getAll();
    let used = this.updateGameCounter(games);

    return (
      <div className="App">
        <div className="row container-fluid">
          <Header gamesUnused={games.length - used} gamesUsed={used} gamesTotal={games.length}/>
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
