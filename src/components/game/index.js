import React, { Component, Fragment } from "react";
import StubAPI from '../../datastore/stubAPI'

export default class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cost: props.game.cost,
            name: props.game.name,
            code: props.game.code,
            type: "Unused",
            link: props.game.link,
            date: new Date()
        }
    }

    render() {
        let details = this.state.array;
        return (
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 key="name" className="card-title">{this.state.name}</h5>
                        <dl>
                            <dt key = "cost">{this.state.cost}</dt>
                            <dt key = "date">Added: {this.state.date.toLocaleDateString()}</dt>
                        </dl>
                    </div>
                    <div className="card-footer">
                        <div className="btn-group d-flex btn-group-justified" role="group" aria-label="...">
                            <button type="button" className={"btn btn-default w-100"}>
                                {" Edit "}
                            </button>
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
