import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { history } from 'utils/history';

const devConfig = {
	apiKey: process.env.REACT_APP_DEV_API_KEY,
	authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
	projectId: process.env.REACT_APP_DEV_PROJECT_ID,
	storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID
};

const prodConfig = {
	apiKey: process.env.REACT_APP_PROD_API_KEY,
	authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
	projectId: process.env.REACT_APP_PROD_PROJECT_ID,
	storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID
};

const config =
	process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
		this.db = app.database();
	}

	// *** Auth API ***
	createUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

	signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

	signInWithGoogle = () => {
		console.log('signInWithGoogle');
	};

	signInWithFacebook = () => {
		console.log('signInWithFacebook');
	};

	signInWithTwitter = () => {
		console.log('signInWithTwitter');
	};

	signOut = () => this.auth.signOut().then(() => history.push('/'));

	sendPasswordResetEmail = email => this.auth.sendPasswordResetEmail(email);

	updatePassword = password => this.auth.currentUser.updatePassword(password);

	// *** Database API ***
	user = uid => this.db.ref(`users/${uid}`);

	users = () => this.db.ref('users');

	places = () => this.db.ref('places');
}
