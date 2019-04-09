import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB24r51OUBMCk03lHWXevQharcEyKq5BUk",
    authDomain: "first-project-marysia.firebaseapp.com",
    databaseURL: "https://first-project-marysia.firebaseio.com",
    projectId: "first-project-marysia",
    storageBucket: "first-project-marysia.appspot.com",
    messagingSenderId: "748287643590"
}

const app = firebase.initializeApp(config)

export const db = app.database()