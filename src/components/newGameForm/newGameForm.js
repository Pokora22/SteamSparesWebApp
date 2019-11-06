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

                <form  className="container-fluid form bg-dark text-light col-4">
                    <h3>Add a new game</h3>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               defaultValue={this.state.name}
                               onChange={this.handleNameChange}
                               placeholder="Game Name"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               defaultValue={this.state.note}
                               onChange={this.handleNoteChange}
                               placeholder="Note"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               defaultValue={this.state.link}
                               onChange={this.handleLinkChange}
                               placeholder="Link"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               defaultValue={this.state.code}
                               onChange={this.handleCodeChange}
                               placeholder="Game Code"></input>
                    </div>
                    <div className="form-group">
                        <input type="number"
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