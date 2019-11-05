import React, {Component} from "react"
import Game from "../game/index"

export default class GameList extends Component {
    render() {
        const games = this.props.games.map(g => (
            <Game game={g} />
        ));

        return(
            <div className="container-fluid contacts bg-info">
                <div className="row">{games}</div>
            </div>
        )
    }
}