import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyC_HPogdDajow5L4YJXY1Isom6MIpxqzQw",
    authDomain: "chartsexample.firebaseapp.com",
    databaseURL: "https://chartsexample.firebaseio.com",
    projectId: "chartsexample",
    storageBucket: "chartsexample.appspot.com",
    messagingSenderId: "971525237244"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

app.database().ref('/').once('value').then((snapshot) => {
    console.log('firebase test', snapshot.val())
})
