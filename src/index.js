import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/about/about'
import Login from "./components/firebase/login";
import Signup from "./components/firebase/signup";
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Firebase, { FirebaseContext, withFirebase } from './components/firebase';

class Router extends Component{

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route exact path="/login" component={withFirebase(Login)}/>
                    <Route exact path="/signup" component={withFirebase(Signup)}/>
                    <Route exact path="/app" component={App}/>
                    <Redirect from="/" to="/login" />
                    {/*TODO: If user not logged*/}
                    <Redirect from="*" to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}


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
