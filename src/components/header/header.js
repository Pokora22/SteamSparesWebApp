import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./header.css"
import SignOutButton from "../buttons/signOutButton";


class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h1>
                                <span className={"header col-4 "}><Link className="deco-none" to="/about">SteamSpares</Link></span>
                                <span className="counter badge badge-pill badge-success align-text-top">{this.props.gamesUnused}
                                    <span className={"countertext"}>Unused</span>
                                </span>
                                <span className="counter badge badge-pill badge-dark align-text-top">{this.props.gamesUsed}
                                    <span className={"countertext"}>Used</span>
                                </span>
                                <span className="counter badge badge-pill badge-warning align-text-top">{this.props.gamesTotal}
                                    <span className={"countertext"}>Total</span>
                                </span>
                                <span>
                                    <SignOutButton />
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