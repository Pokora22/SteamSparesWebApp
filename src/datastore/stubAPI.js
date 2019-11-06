import _ from "lodash";
import * as uuid from "uuid";

class StubAPI {
    constructor() {
        this.games = []
        for(let i = 0; i < 4; i++)
            this.addGame("Game1", "", "http://www.google.com", "No way", 0);
    }

    addGame(gameData){
        let {name, note, link, code, cost} = gameData;
        let game = {
            id: uuid(),
            cost: cost,
            name: name,
            code: code,
            used: "Unused",
            link: link,
            date: new Date(),
            note: note
        }

        this.games.push(game);
    }

    find(id) {
        let index = _.findIndex(
            this.games,
            game => `${game.id}` === id
        );
        if (index !== -1) {
            return this.games[index];
        }
        return null;
    }

    delete(id) {
        let elements = _.remove(this.games, game => game.id === id);
        return elements;
    }

    initialize(games) {
        this.games = games;
    }

    getAll() {
        return this.games;
    }

    update(gameData) {
        let {id, name, code, link, used, note, cost} = gameData
        let index = _.findIndex(this.games, game => game.id === id);
        if (index !== -1) {
            this.games[index].name = name;
            this.games[index].code = code;
            this.games[index].link = link;
            this.games[index].used = used;
            this.games[index].note = note;
            this.games[index].cost = cost;
            return true;
        }
        return false;
    }
}

export default new StubAPI();