import React from 'react';
import Game from "../components/game/game";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Game',
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

export const gameCard = () => <Game game={sampleGame}/>;

