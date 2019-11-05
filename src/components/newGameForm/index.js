import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (

                <form  className="container-fluid form bg-dark text-light col-4">
                    <h3>Add a new game</h3>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Game Name"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Note"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Link"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Game Code"></input>
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Cost"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

        );
    }
}