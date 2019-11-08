import _ from "lodash";
import * as uuid from "uuid";
import * as firebase from "../components/firebase/firebase";

class StubAPI {
    constructor() {
        this.firebase = firebase.default.prototype;
        this.userId = '';

        this.users = [{
            uid: 'uFB9HBVULUQQs9cq8cRdYuCJBf83',
            games: []
        }];

        // let game = {name: "Game1",
        //     note: "",
        //     link: "http://www.google.com",
        //     code: "No way",
        //     cost: 0}
        // for(let i = 0; i < 4; i++)
        //     this.addGame(game, this.users[0].games);
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

        this.firebase.writeUserGameData(this.userId, game.id, game);

        games.push(game);
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

        return user;
    }

    delete(id, arr) {
        let elements = _.remove(arr, game => game.id === id);
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
                console.log('found games');
                games = value.games;
            }
            else{
                console.log('didnt find any games');
                games = [];
            }
            // games = value.games ?
            //     value.games : [];
        });
        console.log(games);
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