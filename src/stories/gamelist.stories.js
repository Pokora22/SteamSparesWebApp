import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import GameList from "../components/gameList/gameList";



export default {
  title: 'List',
};

const sampleGame = {
    id: 0,
    name: 'Story Game',
    code: 'XXX',
    link: 'google.com',
    used: false,
    note: 'Nothing to say',
    cost: 12,
    date: Date.now(),
}

const games = [sampleGame, sampleGame, sampleGame, sampleGame];

export const gameList = () => <GameList games={games} />;


