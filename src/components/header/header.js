import React, { Component } from "react";
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h1>
                                <span className={"header col-4"}>SteamSpares</span>
                                <span className="counter badge badge-pill badge-success align-text-top">{this.props.gamesUnused}
                                    <span className={"countertext"}>Unused</span>
                                </span>
                                <span className="counter badge badge-pill badge-dark align-text-top">{this.props.gamesUsed}
                                    <span className={"countertext"}>Used</span>
                                </span>
                                <span className="counter badge badge-pill badge-warning align-text-top">{this.props.gamesTotal}
                                    <span className={"countertext"}>Total</span>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;