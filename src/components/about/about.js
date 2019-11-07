import React, {Component} from "react"
import { Link } from 'react-router-dom';

export default class GameList extends Component {

    render() {
        return(
            <div className="container-fluid contacts bg-info col-8 vh-100">
                <div className="row">This will contain some about info</div>
                <Link to={"goBack"}><div className="row">Go Back</div></Link>
            </div>
        )
    }
}