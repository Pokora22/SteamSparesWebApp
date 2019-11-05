import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/game/index'
import GameList from "./components/gameList";
import Form from "./components/newGameForm"
import api from "./datastore/stubAPI";

class App extends Component{
  deleteGame = (id) =>{
    api.delete(id)
    this.setState({});
  }

  addNewsItem = (name, note, link, code, cost) => {
    api.addGame(name, note, link, code, cost);
    this.setState({});
  };


  render() {
    let games = api.getAll();

    return (
      <div className="App">
        <div class="row container-fluid">
          <Form addHandler={this.addNewsItem}/>
          <GameList games={games} hello=" you" deleteHandler={this.deleteGame}/>
        </div>
      </div>
    );
  }
}

export default App;
