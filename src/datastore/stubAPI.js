import _ from "lodash";
import * as uuid from "uuid";
import * as firebase from "../components/firebase/firebase";

class StubAPI {
    constructor() {
        this.firebase = firebase.default.prototype;
        this.userId = '';
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
            date: (new Date()).toLocaleDateString(),
            note: note
        }

        this.firebase.writeUserGameData(this.userId, game.id, game); //online update
        games.push(game); //local update
    }

    async findUser(id) {
        let user = await this.firebase.findUserData(id);

        if(!user) {
            console.log('Creating new user in db');
            user = {
                uid: id
            }
            firebase.default.prototype.writeUserData(user);
        }
        console.log(user);
        return user;
    }

    delete(id, arr) {
        firebase.default.prototype.removeGameData(this.userId, id); //online update
        let elements = _.remove(arr, game => game.id === id); //local update
        return elements;
    }

    initialize(games) {
        this.games = games;
    }

    async getAllGames(uid) {
        this.userId = uid;

        let games = [];
        await this.findUser(uid).then(value => {
            if(value.games){
                var keys = Object.keys(value.games);
                keys.forEach(function(key){
                    games.push(value.games[key]);
                });
            }
        });
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

            firebase.default.prototype.writeUserGameData(this.userId, id, gameData);

            return true;
        }
        return false;
    }
}

export default new StubAPI();