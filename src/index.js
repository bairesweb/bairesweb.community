import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';

import * as firebase from 'firebase';

import App from 'App';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyA01OvyY-Xth-7vIS33MdII9O20bZtMtXA',
	authDomain: 'baires-web.firebaseapp.com',
	databaseURL: 'https://baires-web.firebaseio.com',
	projectId: 'baires-web',
	storageBucket: 'baires-web.appspot.com',
	messagingSenderId: '453972306115'
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
