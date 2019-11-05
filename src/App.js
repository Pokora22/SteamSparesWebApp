import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/game/index'
import GameList from "./components/gameList";
import api from "./datastore/stubAPI";

class App extends Component{
  render() {
    let games = api.getAll();
    return (
        <div className="App">
          <GameList games={games}/>
        </div>
    );
  }
}

export default App;
