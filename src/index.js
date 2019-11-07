import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Firebase, { FirebaseContext, withFirebase } from './components/firebase';
import Router from "./components/router";


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Router />
    </FirebaseContext.Provider>,
     document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
