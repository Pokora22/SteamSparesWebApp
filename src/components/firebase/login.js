import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pass: ''
        };
    }


    handleNameChange = (e) =>  this.setState({mail: e.target.value});
    handlePassChange = (e) =>  this.setState({pass: e.target.value});


    handleSubmit = (e) => {
        this.props.firebase
            .doSignInWithEmailAndPassword(this.state.mail, this.state.pass)
            .then(() => {
                this.setState({ mail:'', pass:'' });
                this.props.history.push("/app");
            })
            .catch(error => {
                this.setState({ error });
                alert(error);
            });
        e.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} className="container-fluid form bg-dark text-light col-4 vh-100">
                <h3>Log in to access the page</h3>
                <div className="form-group">
                    <label htmlFor="username" className="col-12 col-form-label">E-Mail</label>
                    <input type="text"
                           id="username"
                           className="form-control"
                           value={this.state.name}
                           onChange={this.handleNameChange}
                           placeholder="E-Mail"></input>

                    <label htmlFor="password" className="col-12 col-form-label">Password</label>
                    <input type="password"
                           id="password"
                           className="form-control"
                           value={this.state.note}
                           onChange={this.handlePassChange}
                           placeholder="********"></input>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/signup"><button type="button" className="btn btn-primary float-right">Sign Up</button></Link>
            </form>

        );
    }
}