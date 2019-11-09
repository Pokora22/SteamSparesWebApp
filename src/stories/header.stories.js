import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from "../components/header/header";


export default {
  title: 'Header',
};

export const header = () => <Header gamesUsed={12} gamesUnused={5} gamesTotal={17}/>;
