import React, {Component} from "react"
import Game from "../game/index"

export default class GameList extends Component {
    render() {
        const games = this.props.games.map(g => (
            <Game game={g} deleteHandle={this.props.deleteHandler}/>
        ));

        return(
            <div className="container-fluid contacts bg-info col-8">
                <div className="row">{games}</div>
            </div>
        )
    }
}