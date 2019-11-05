import React, { Component, Fragment } from "react";
import * as uuid from "uuid";
import buttons from "../../config/buttonsConfig";
import api from "../../datastore/stubAPI";

export default class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: "",
            id: uuid(),
            cost: props.game.cost,
            name: props.game.name,
            code: props.game.code,
            used: "Unused",
            link: props.game.link,
            date: new Date(),
            note: ""
        }
    }

    handleEdit = () => this.setState({ status: "edit" });

    handleSave = e => {
        e.preventDefault();
        let updatedName = this.state.name.trim();
        let updatedCode = this.state.code.trim();
        let updatedNote = this.state.note.trim();
        if (!updatedName || !updatedCode) {
            return;
        }
        let { id, name, code, link, type, note } = this.state;
        this.setState({ status: "", previousDetails: { id, name, code, link, type, note } });
        api.update(this.state.previousDetails.id, updatedName, updatedCode, this.state.previousDetails.link, updatedNote); //TODO: Add used/unused switching and link change (they're buttons...)
    };

    handleCancel = () => {
        alert("?")
        let { name, code, note } = this.state.previousDetails;
        this.setState({ status: "", name, code, note });
    };

    handleNameChange = e => this.setState({ name: e.target.value });
    handleCostChange = e => this.setState({ cost: e.target.value });
    handleNoteChange = e => this.setState({ note: e.target.value });
    handleCodeChange = e => this.setState({ code: e.target.value });
    handleDelete = () =>  this.setState({ status : 'del'} );
    handleUsedChange = () => this.setState({used: this.state.used === "Unused" ? "Used" : "Unused"})

    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.phone);
    };

    render() {
        let activeButtons = buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let usedButtonHandler = this.handleUsedChange;
        let cardColor = this.state.used === "Unused" ? "bg-light" : "bg-dark";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
        }
        else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
        }

        return (
            <div className="col-12">
                <div className={`card ${cardColor}`}>
                    <div className="card-body">


                            {this.state.status === "edit" ? (
                                <Fragment>
                                    <h5 key="name" className="card-title">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.handleNameChange}
                                        />
                                    </h5>
                                    <dl>
                                        <dt>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.cost}
                                                onChange={this.handleCostChange}
                                            />
                                        </dt>
                                        <dt key = "date">Added: {this.state.date.toLocaleDateString()}</dt>
                                        <dt>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.note}
                                                onChange={this.handleNoteChange}
                                            />
                                        </dt>
                                        <dt>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.code}
                                                onChange={this.handleCodeChange}
                                            />
                                        </dt>
                                    </dl>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <h5 key="name" className="card-title">{this.state.name}</h5>
                                    <dl>
                                        <dt key = "cost">{this.state.cost}$</dt>
                                        <dt key = "date">Added: {this.state.date.toLocaleDateString()}</dt>
                                        <dt key = "note">{this.state.note}</dt>
                                        <dt key = "code">
                                            <button type="button" className={"btn btn-success"}>
                                                {"Copy Code"}
                                            </button>
                                        </dt>
                                    </dl>
                                </Fragment>
                            )}


                    </div>

                    <div className="card-footer">
                        <div className="btn-group d-flex btn-group-justified" role="group" aria-label="...">
                            <button type="button" className={"btn w-100 " + activeButtons.leftButtonColor} onClick={leftButtonHandler}>
                                {activeButtons.leftButtonVal}
                            </button>
                            <button type="button" className={"btn btn-primary w-100"} onClick={usedButtonHandler}>
                                {this.state.used}
                            </button>
                            <a href={this.state.link} target="_blank" class="btn w-100 btn-info" role="button">
                                {"Visit store"}
                            </a>
                            <button type="button" className={"btn w-100 " + activeButtons.rightButtonColor} onClick={rightButtonHandler}>
                                {activeButtons.rightButtonVal}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
