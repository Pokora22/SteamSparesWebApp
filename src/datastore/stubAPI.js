import _ from "lodash";

class StubAPI {
    constructor() {
        this.games = [];
        const game = {
            cost: 20,
            name: "Game1",
            code: "google.com",
            link: "http://www.google.com",
        }
        const game2 = {
            cost: 320,
            name: "Game2",
            code: "google.com",
            link: "http://www.google.com",
        }
        this.games.push(game, game, game, game2, game);
    }

    add(game){
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

    update(id, name, code, link, type, note) {
        let index = _.findIndex(this.games, game => game.id === id);
        if (index !== -1) {
            this.games[index].name = name;
            this.games[index].code = code;
            this.games[index].link = link;
            this.games[index].type = type;
            this.games[index].note = note;
            return true;
        }
        return false;
    }
}

export default new StubAPI();