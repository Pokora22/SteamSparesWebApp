import React, {Component} from 'react';
import _ from 'lodash';
import './App.css';
import './components/game/game'
import GameList from "./components/gameList/gameList";
import Form from "./components/newGameForm/newGameForm"
import api from "./datastore/stubAPI";
import Header from "./components/header/header";
import FilterControls from "./components/filterControls/filterControls";

class App extends Component{
  state = { search: "", used: "all" };

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
    type === "name"
        ? this.setState({ search: value })
        : this.setState({ used: value });
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

    let filteredGames = games.filter(g => {
      const name = `${g.name}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredGames =
        this.state.used === "all"
            ? filteredGames
            : filteredGames.filter(g => (g.used === false)); //TODO: Filter by 3 options: false, true, both ?
    let sortedGames = _.sortBy(filteredGames, g => g.name);

    return (
      <div className="App">
        <div className="row container-fluid">
          <Header gamesUnused={games.length - usedCount} gamesUsed={usedCount} gamesTotal={games.length}/>
        </div>
        <div className={"row container-fluid"}>
          <FilterControls filter={this.handleFiltering}/>
        </div>
        <div className="row container-fluid">
          <Form addHandler={this.addNewGame}/>
          <GameList games={sortedGames} deleteHandler={this.deleteGame} updateHandler={this.updateGame}/>
        </div>
      </div>
    );
  }
}

export default App;
