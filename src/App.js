import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/game/index'
import GameList from "./components/gameList";
import Form from "./components/newGameForm"
import api from "./datastore/stubAPI";

class App extends Component{
  deleteGame = (id) =>{
    // api.delete(id)
    // this.setState({});
  }


  render() {
    let games = api.getAll();
    return (
      <div className="App">
        <div class="row container-fluid">
          <Form />
          <GameList games={games} deleteHandler={this.deleteGame()}/>
        </div>
      </div>
    );
  }
}

export default App;
