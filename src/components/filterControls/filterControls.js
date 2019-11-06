import React, { Component } from "react";

export default class FilterControls extends Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.filter(type, value);
    };

    handleTextChange = e => {
        this.handleChange(e, "name", e.target.value);
    };
    handleTypeChange = e => {
        this.handleChange(e, "usedState", e.target.value);
    };

    render() {
        return (
            <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-md-12">
                    <h4>
                        <span>Filter </span>
                        <input
                            type="text"
                            placeholder="Name Search"
                            onChange={this.handleTextChange}
                        />
                        <span> Used?: </span>
                        <select
                            id="usedState"
                            onChange={this.handleTypeChange}
                        >
                            <option value="all">All</option>
                            <option value="unused">Unused Only</option>
                            <option value="used">Used Only</option>
                        </select>
                    </h4>
                </div>
            </nav>
        );
    }
}