import React, {Component} from 'react';
import './App.css';
import './game/game'
import GameList from "./gameList/gameList";
import Form from "./newGameForm/newGameForm"
import api from "../datastore/stubAPI";
import Header from "./header/header";
import FilterControls from "./filterControls/filterControls";

class App extends Component{
  state = { search: "", used: "", sorting: "", order: "", gameList: api.getAllGames(this.props.firebase.auth.currentUser.uid) };

  deleteGame = (id) =>{
    api.delete(id, this.state.gameList)
    this.setState({});
  }

  addNewGame = (gameData) => {
    api.addGame(gameData, this.state.gameList);
    this.setState({});
  };

  updateGame = (gameData) => {
    api.update(gameData, this.state.gameList)
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
    // let games = api.getAllGames(this.props.firebase.auth.currentUser.uid);
    // let usedCount = 0;
    let usedCount = this.updateGameCounter(this.state.gameList);
    let filteredGames = api.getFiltered(this.state.search, this.state.gameList);
    filteredGames = api.getFiltered(this.state.used, filteredGames);
    let sortedGames = api.getSorted(this.state.sorting, this.state.order, filteredGames);

    console.log();

    return (
      <div className="App">
        <div className="row">
          <Header gamesUnused={this.state.gameList.length - usedCount} gamesUsed={usedCount} gamesTotal={this.state.gameList.length}/>
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
