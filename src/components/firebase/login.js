import React, { Component } from 'react';
import * as firebase from "firebase";
import * as firebaseui from 'firebaseui';

firebase.auth().onAuthStateChanged(user =>{
    if(user)
        this.props.changeLogged();
})

// Initialize the FirebaseUI Widget using Firebase.
let ui = new firebaseui.auth.AuthUI(firebase.auth());


export default class Login extends Component {
    state = {
        name: "",
        pass: "",
    }

    handleNameChange = (e) =>  this.setState({name: e.target.value});
    handlePassChange = (e) =>  this.setState({pass: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();

        // firebase.auth().signInWithEmailAndPassword(email, pasword).
    }
    //TODO: Remove probably, react is different ?

    render() {
        return (

            <form  className="container-fluid form bg-dark text-light col-4 vh-100">
                <h3>Log in to access the page</h3>
                <div className="form-group">
                    <label htmlFor="username" className="col-12 col-form-label">E-Mail</label>
                    <input type="text"
                           id="username"
                           className="form-control"
                           defaultValue={this.state.name}
                           onChange={this.handleNameChange}
                           placeholder="E-Mail"></input>

                    <label htmlFor="password" className="col-12 col-form-label">Password</label>
                    <input type="password"
                           id="password"
                           className="form-control"
                           defaultValue={this.state.note}
                           onChange={this.handlePassChange}
                           placeholder="********"></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
            </form>

        );
    }
}