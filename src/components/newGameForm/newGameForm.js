import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        name: "",
        note: "",
        link: "",
        code: "",
        cost: 0
    }

    handleNameChange = (e) =>  this.setState({name: e.target.value});
    handleNoteChange = (e) =>  this.setState({note: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});
    handleCodeChange = (e) => this.setState({code: e.target.value});
    handleCostChange = (e) => this.setState({cost: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addHandler( this.state)
        this.setState({ name: "", note:'', link: '', code: '', cost: 0})
    }

    render() {
        return (

                <form  className="container-fluid form bg-dark text-light col-4 vh-100">
                    <h3>Add a new game</h3>
                    <div className="form-group">
                        <label htmlFor="gameName" className="col-12 col-form-label">Name of the game?</label>
                        <input type="text"
                               id="gameName"
                               className="form-control"
                               defaultValue={this.state.name}
                               onChange={this.handleNameChange}
                               placeholder="Game Name"></input>

                        <label htmlFor="notes" className="col-12 col-form-label">Any notes?</label>
                        <input type="text"
                               id="notes"
                               className="form-control"
                               defaultValue={this.state.note}
                               onChange={this.handleNoteChange}
                               placeholder="Note"></input>

                        <label htmlFor="link" className="col-12 col-form-label">Where can you view it?</label>
                        <input type="text"
                               id="link"
                               className="form-control"
                               defaultValue={this.state.link}
                               onChange={this.handleLinkChange}
                               placeholder="Link"></input>

                        <label htmlFor="code" className="col-12 col-form-label">Your redeem code</label>
                        <input type="text"
                               id="code"
                               className="form-control"
                               defaultValue={this.state.code}
                               onChange={this.handleCodeChange}
                               placeholder="Game Code"></input>

                        <label htmlFor="cost" className="col-12 col-form-label">What did it cost?</label>
                        <input type="number"
                               id="cost"
                               className="form-control"
                               defaultValue={this.state.cost}
                               onChange={this.handleCostChange}
                               placeholder="Cost"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
                </form>

        );
    }
}