import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/game/index'
import Game from "./components/game";

function App() {
  const game = {
    cost: 20,
    name: "Game1",
    code: "google.com",
    link: "google.com",
  }

  return (
    <div className="App">
      <Game game={game}/>
    </div>
  );
}

export default App;
