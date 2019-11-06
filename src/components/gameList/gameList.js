import React, {Component} from "react"
import Game from "../game/game"

export default class GameList extends Component {

    render() {
        const games = this.props.games.map(g => (
            <Game key={g.id} game={g} deleteHandler={this.props.deleteHandler} updateHandler={this.props.updateHandler}/>
        ));

        return(
            <div className="container-fluid contacts bg-info col-8">
                <div className="row">{games}</div>
            </div>
        )
    }
}