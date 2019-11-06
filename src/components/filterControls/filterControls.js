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
    handleSortChange = e => {
        this.handleChange(e, "sort", e.target.value);
    };
    handleOrderChange = e => {
        this.handleChange(e, "order", e.target.value);
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
                        <span> Sort By: </span>
                        <select
                            id="sort"
                            onChange={this.handleSortChange}
                        >
                            <option value="name">Name</option>
                            <option value="date">Date Added</option>
                            <option value="cost">Cost</option>
                        </select>
                        <select
                            id="order"
                            onChange={this.handleOrderChange}
                        >
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </h4>
                </div>
            </nav>
        );
    }
}