import React, { Component, Fragment } from "react";
import buttons from "../../config/buttonsConfig";
import validUrl from 'valid-url';
import Popover from 'react-tiny-popover';
import * as copy from 'clipboard-copy';

export default class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.game.id,
            name: props.game.name,
            code: props.game.code,
            link: props.game.link,
            used: props.game.used,
            note: props.game.note,
            cost: props.game.cost,
            date: props.game.date,
            isPopoverOpen: false
        }
    }

    handleEdit = () => {
        this.setState({previousDetails: this.state})
        this.setState({ status: "edit" });
    }
    handleDelete = () => {
        this.setState({previousDetails: this.state})
        this.setState({status: 'del'});
    }

    handleSave = e => {
        e.preventDefault();
        let updatedName = this.state.name.trim();
        let updatedCode = this.state.code.trim();
        if (!updatedName || !updatedCode) {
            return;
        }
        let { id, name, code, link, used, note, cost } = this.state;
        this.setState({ status: "", previousDetails: { id, name, code, link, used, note, cost } });
        this.props.updateHandler(this.state);
    };
    handleCancel = () => {
        let { name, code, note } = this.state.previousDetails;
        this.setState({ status: "", name, code, note });
    };
    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.id);
    };

    handleNameChange = e => this.setState({ name: e.target.value });
    handleCostChange = e => this.setState({ cost: e.target.value });
    handleNoteChange = e => this.setState({ note: e.target.value });
    handleCodeChange = e => this.setState({ code: e.target.value });
    handleLinkChange = e => this.setState({ link: e.target.value });

    handleUsedChange = () => {
        let newState = this.state;
        newState.used = !newState.used;
        this.props.updateHandler(newState);
    }

    handleLinkButton = e =>{
        let url = this.state.link;
        if (validUrl.isUri(url)){
            window.open(url)
        } else {
            this.setState({isPopoverOpen: true})
        }
    }

    render() {
        let activeButtons = buttons.normal;
        let editButtonHandler = this.handleEdit;
        let deleteButtonHandler = this.handleDelete;
        let usedButtonHandler = this.handleUsedChange;
        let cardColor = this.state.used? "bg-dark" : "bg-light";
        let usedVal = this.state.used? "Used" : "Unused";
        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            editButtonHandler = this.handleSave;
            deleteButtonHandler = this.handleCancel;
        }
        else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            editButtonHandler = this.handleCancel;
            deleteButtonHandler = this.handleConfirm;
        }

        return (
            <div className="col-12">
                <div className={`card ${cardColor}`}>
                    <div className="card-body">
                            {this.state.status === "edit" ? (
                                <Fragment>
                                    <dl>
                                        <dt key = "date">Added: {this.state.date}</dt>
                                        <dt>
                                            <label htmlFor="name" className="col-12 col-form-label">Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="form-control"
                                                value={this.state.name}
                                                onChange={this.handleNameChange}
                                            />
                                        </dt>
                                        <dt>
                                            <label htmlFor="cost" className="col-12 col-form-label">Cost</label>
                                            <input
                                                id="cost"
                                                type="text"
                                                className="form-control"
                                                value={this.state.cost}
                                                onChange={this.handleCostChange}
                                            />
                                        </dt>
                                        <dt>
                                            <label htmlFor="date" className="col-12 col-form-label">Notes</label>
                                            <input
                                                id="date"
                                                type="text"
                                                className="form-control"
                                                value={this.state.note}
                                                placeholder="Note"
                                                onChange={this.handleNoteChange}
                                            />
                                        </dt>
                                        <dt>
                                            <label htmlFor="code" className="col-12 col-form-label">Code</label>
                                            <input
                                                id="code"
                                                type="text"
                                                className="form-control"
                                                value={this.state.code}
                                                onChange={this.handleCodeChange}
                                            />
                                        </dt>
                                        <dt>
                                            <label htmlFor="link" className="col-12 col-form-label">Link</label>
                                            <input
                                                id="link"
                                                type="text"
                                                className="form-control"
                                                value={this.state.link}
                                                onChange={this.handleLinkChange}
                                            />
                                        </dt>
                                    </dl>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <h5 key="name" className="card-title">{this.state.name}</h5>
                                    <dl>
                                        <dt key = "cost">{this.state.cost}$</dt>
                                        <dt key = "date">Added: {this.state.date}</dt>
                                        <dt key = "note">{this.state.note}</dt>
                                        <dt key = "code">
                                            <button type="button" className={"btn btn-success"} onClick={() => copy(this.state.code)}>
                                                {"Copy Code"}
                                            </button>
                                        </dt>
                                    </dl>
                                </Fragment>
                            )}

                    </div>

                    <div className="card-footer">
                        <div className="btn-group d-flex btn-group-justified" role="group" aria-label="...">
                            <button type="button" className={"btn w-100 " + activeButtons.leftButtonColor} onClick={editButtonHandler}>
                                {activeButtons.leftButtonVal}
                            </button>
                            <button type="button" className={"btn btn-primary w-100"} onClick={usedButtonHandler}>
                                {usedVal}
                            </button>

                            <Popover
                                isOpen={this.state.isPopoverOpen}
                                position={['top', 'right', 'left']}
                                padding={10}
                                onClickOutside={() => this.setState({ isPopoverOpen: false })}
                                content={() => (
                                    <div
                                        className={"badge bg-info"}
                                        onClick={() => {
                                            this.setState({ isPopoverOpen: false });
                                    }}>
                                        Sorry mate. This url is invalid.
                                        <div>({this.state.link})</div>
                                    </div>
                                )}
                            >

                            <button type="button" className="btn w-100 btn-info" onClick={this.handleLinkButton}>
                                {"Visit store"}
                            </button>
                            </Popover>

                            <button type="button" className={"btn w-100 " + activeButtons.rightButtonColor} onClick={deleteButtonHandler}>
                                {activeButtons.rightButtonVal}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
