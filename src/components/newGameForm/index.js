import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        name: "",
        note: "",
        link: "",
        code: "",
        cost: 0
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addHandler( this.state.name, this.state.note, this.state.link, this.state.code, this.state.cost)
        this.setState({ title: '', author:'', link: ''})
    }

    render() {
        return (

                <form  className="container-fluid form bg-dark text-light col-4">
                    <h3>Add a new game</h3>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               placeholder="Game Name"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               value={this.state.note}
                               placeholder="Note"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               value={this.state.link}
                               placeholder="Link"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               value={this.state.code}
                               placeholder="Game Code"></input>
                    </div>
                    <div className="form-group">
                        <input type="number"
                               className="form-control"
                               value={this.state.cost}
                               placeholder="Cost"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
                </form>

        );
    }
}