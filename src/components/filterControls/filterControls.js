import React, { Component } from "react";
import arrow from './order.png';
import './filterControls.css';

export default class FilterControls extends Component {
    state = {
        order: "asc"
    }

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
        let newOrder = this.state.order === "asc" ?
            "desc" : "asc";
        this.handleChange(e, "order", newOrder);
        this.setState({order: newOrder});
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

                        <select
                            id="usedState"
                            onChange={this.handleTypeChange}
                        >
                            {/*Compared to a 'used' boolean turned into string on the game object/*/}
                            <option value="">All</option>
                            <option value="false">Unused Only</option>
                            <option value="true">Used Only</option>
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
                        <img src={arrow} className={this.state.order} alt="Order" onClick={this.handleOrderChange}/>
                    </h4>
                </div>
            </nav>
        );
    }
}