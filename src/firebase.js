import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
	apiKey: 'AIzaSyC2gcsHBtb7BLREjKe86EZTCISxRyW0ekw',
	authDomain: 'react-slack-clone-469db.firebaseapp.com',
	databaseURL: 'https://react-slack-clone-469db.firebaseio.com',
	projectId: 'react-slack-clone-469db',
	storageBucket: 'react-slack-clone-469db.appspot.com',
	messagingSenderId: '83687671773',
};
firebase.initializeApp(config);

export default firebase;
