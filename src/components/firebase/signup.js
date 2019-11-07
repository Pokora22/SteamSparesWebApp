import React, { Component } from 'react';

export default class Signup extends Component {
    state = {
        name: "",
        pass: "",
    }

    handleNameChange = (e) =>  this.setState({name: e.target.value});
    handlePassChange = (e) =>  this.setState({pass: e.target.value});


    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (

            <form  className="container-fluid form bg-dark text-light col-4 vh-100">
                <h3>Create a new account</h3>
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
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Signup</button>
            </form>

        );
    }
}