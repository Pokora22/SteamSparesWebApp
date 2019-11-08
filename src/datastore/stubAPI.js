import _ from "lodash";
import * as uuid from "uuid";

class StubAPI {
    constructor() {
        this.users = [{
            uid: 'uFB9HBVULUQQs9cq8cRdYuCJBf83',
            games: []
        }];

        let game = {name: "Game1",
            note: "",
            link: "http://www.google.com",
            code: "No way",
            cost: 0}
        for(let i = 0; i < 4; i++)
            this.addGame(game, this.users[0].games);
    }

    addGame(gameData, games){
        let {name, note, link, code, cost} = gameData;
        let game = {
            id: uuid(),
            cost: cost,
            name: name,
            code: code,
            used: false,
            link: link,
            date: new Date(),
            note: note
        }

        games.push(game);
    }

    findUser(id) {
        let index = _.findIndex(
            this.users,
            user => `${user.uid}` === id
        );
        if (index !== -1) {
            return this.users[index];
        }
        //Otherwise create a new user in db
        let newUser = {
            uid: id,
            games: []
        }
        this.users.push(newUser);
        return newUser;
    }

    delete(id, arr) {
        let elements = _.remove(arr, game => game.id === id);
        return elements;
    }

    initialize(games) {
        this.games = games;
    }

    getAllGames(uid) {
        let games = this.findUser(uid).games;
        return games;
    }

    getFiltered(search, arr = this.games){
        return arr.filter(o =>
            Object.keys(o).some(k => o[k].toString().toLowerCase().includes(search.toLowerCase()) && k !== 'id'));
    }

    getSorted(type, order = 'asc', arr = this.games){
        return _.orderBy(arr, [type], [order]);
    }

    update(gameData, arr) {
        let {id, name, code, link, used, note, cost} = gameData;
        let index = _.findIndex(arr, game => game.id === id);
        if (index !== -1) {
            arr[index].name = name;
            arr[index].code = code;
            arr[index].link = link;
            arr[index].used = used;
            arr[index].note = note;
            arr[index].cost = cost;
            return true;
        }
        return false;
    }
}

export default new StubAPI();