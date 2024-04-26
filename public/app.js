import firebase from 'firebase/compat/app';
import 'firebase/compat/performance';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase config
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
const auth = firebase.auth();
const perf = firebase.performance();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const userDetails = document.getElementById('userDetails');
const provider = new firebase.auth.GoogleAuthProvider();

// Sign-in
signInBtn.addEventListener('click', () => auth.signInWithPopup(provider));

signOutBtn.addEventListener('click', () => auth.signOut());

auth.onAuthStateChanged((user) => {
	if (user) {
		whenSignedIn.hidden = false;
		whenSignedOut.hidden = true;
		userDetails.innerHTML = `<h3>Hei ${user.displayName}!</h3> <p>Käyttäjä ID: ${user.uid}</p>`;
	} else {
		whenSignedIn.hidden = true;
		whenSignedOut.hidden = false;
		userDetails.innerHTML = '';
	}
});
