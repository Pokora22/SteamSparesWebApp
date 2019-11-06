import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-4">
                        <div className="page-header">
                            <h1>
                                SteamSpares
                                <span className="badge badge-pill badge-success">{this.props.gamesUnused}</span>
                                <span className="badge badge-pill badge-dark">{this.props.gamesUsed}</span>
                                <span className="badge badge-pill badge-warning">{this.props.gamesTotal}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;