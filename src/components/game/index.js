import React, { Component, Fragment } from "react";

export default class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cost: props.game.cost,
            name: props.game.name,
            code: props.game.code,
            used: "Unused",
            link: props.game.link,
            date: new Date(),
            note: ""
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h5 key="name" className="card-title">{this.state.name}</h5>
                        <dl>
                            <dt key = "cost">{this.state.cost}$</dt>
                            <dt key = "date">Added: {this.state.date.toLocaleDateString()}</dt>
                            <dt key = "note">{this.state.note}</dt>
                        </dl>
                    </div>
                    <div className="card-footer">
                        <div className="btn-group d-flex btn-group-justified" role="group" aria-label="...">
                            <button type="button" className={"btn btn-warning w-100"}>
                                {" Edit "}
                            </button>
                            <button type="button" className={"btn btn-primary w-100"}>
                                {this.state.used}
                            </button>
                            <a href={this.state.link} target="_blank" class="btn w-100 btn-info" role="button">
                                {"Visit store"}
                            </a>
                            <button type="button" className={"btn btn-danger w-100"}>
                                {"Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
