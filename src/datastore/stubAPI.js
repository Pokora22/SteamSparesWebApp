import _ from "lodash";

class StubAPI {
    constructor() {
        this.games = [];
        const game = {
            cost: 20,
            name: "Game1",
            code: "google.com",
            link: "www.google.com",
        }
        this.games.push(game, game, game, game, game);
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

    update(id, name, link, type) {
        let index = _.findIndex(this.games, game => game.id === id);
        if (index !== -1) {
            this.games[index].name = name;
            this.games[index].link = link;
            this.games[index].type = type;
            return true;
        }
        return false;
    }
}

export default new StubAPI();