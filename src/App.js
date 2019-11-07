import React, {Component} from 'react';
import './App.css';
import './components/game/game'
import GameList from "./components/gameList/gameList";
import Form from "./components/newGameForm/newGameForm"
import api from "./datastore/stubAPI";
import Header from "./components/header/header";
import FilterControls from "./components/filterControls/filterControls";

class App extends Component{
  state = { search: "", used: "", sorting: "", order: "" };

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

  handleFiltering = (type, value) => {
    switch (type) {
      case "name":
        this.setState({search: value});
        break;
      case "usedState":
        this.setState({used: value});
        break;
      case "sort":
        this.setState({sorting: value});
        break;
      case "order":
        this.setState({order: value});
        break;
      default:
        break;
    }
  };

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
    let usedCount = this.updateGameCounter(games);
    let filteredGames = api.getFiltered(this.state.search, games);
    filteredGames = api.getFiltered(this.state.used, games);
    let sortedGames = api.getSorted(this.state.sorting, this.state.order, filteredGames);

    return (
      <div className="App">
        <div className="row">
          <Header gamesUnused={games.length - usedCount} gamesUsed={usedCount} gamesTotal={games.length}/>
        </div>
        <div className={"row"}>
          <FilterControls filter={this.handleFiltering}/>
        </div>
        <div className="row">
          <Form addHandler={this.addNewGame}/>
          <GameList games={sortedGames} deleteHandler={this.deleteGame} updateHandler={this.updateGame}/>
        </div>
      </div>
    );
  }
}

export default App;
