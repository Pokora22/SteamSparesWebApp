import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Signup extends Component {
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
            .doCreateUserWithEmailAndPassword(this.state.mail, this.state.pass)
            .then(authUser => {
                this.setState({ mail:'', pass: '' });
            })
            .catch(error => {
                this.setState({ error });
            });
        e.preventDefault();
    }

    render() {
        return (

                <form onSubmit={this.handleSubmit} className="container-fluid form bg-dark text-light col-4 vh-100">
                    <h3>Create a new account</h3>
                    <div className="form-group">
                        {/*There's some requirements to the e-mail for firebase, unsure what exactly*/}
                        <label htmlFor="username" className="col-12 col-form-label">E-Mail</label>
                        <input type="email"
                               id="username"
                               className="form-control"
                               value={this.state.mail}
                               onChange={this.handleNameChange}
                               placeholder="E-Mail"></input>

                        <label htmlFor="password" className="col-12 col-form-label">Password</label>
                        <input type="password"
                               id="password"
                               pattern=".{6,}" title="Six or more characters"
                               className="form-control"
                               value={this.state.pass}
                               onChange={this.handlePassChange}
                               placeholder="********"></input>
                    </div>
                    <Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link>
                    <button type="submit" className="btn btn-primary float-right">Sign Up</button>
                </form>

        );
    }
}