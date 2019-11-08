import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export default class Firebase {
    constructor() {
        firebase.initializeApp(config);

        this.auth = firebase.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    writeUserData(user) {
        firebase.database().ref('/users/' + user.uid).set(user.uid);
    }

    writeUserGameData(userId, gameId, gameData){
        firebase.database().ref('/users/' + userId + '/games/' + gameId).set(gameData);
    }

    removeGameData(userId, gameId){
        firebase.database().ref('/users/' + userId + '/games/' + gameId).remove();
    }

    async findUserData(userId){
        const snapshot = await firebase.database().ref('/users/' + userId).once('value');
        let user = (snapshot.val());

        return user;
    }
}