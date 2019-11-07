import React, {Component, Fragment} from 'react';
import App from './App';
import About from './about/about'
import Login from "./firebase/login";
import Signup from "./firebase/signup";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { withFirebase } from './firebase';
import { withAuthentication } from './session/';
import { AuthUserContext } from './session';

class Router extends Component{

    render() {
        console.log("Router props");
        console.log(this.props);

        return(
            <BrowserRouter>
                <AuthUserContext.Consumer>
                {authUser =>
                    authUser ?
                        (
                            <Fragment>
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route exact path="/" component={App}/>
                                    <Redirect from="*" to="/" />
                                </Switch>
                            </Fragment>
                        )
                        :
                        (
                            <Fragment>
                                <Switch>
                                    <Route exact path="/login" component={withFirebase(Login)}/>
                                    <Route exact path="/signup" component={withFirebase(Signup)}/>
                                    {/*<Route exact path="/" component={App}/>*/}
                                    <Redirect from="*" to="/login" />
                                </Switch>
                            </Fragment>
                        )
                }
                </AuthUserContext.Consumer>
            </BrowserRouter>
        );
    }
}

export default withAuthentication(Router);