// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC4cDmGioAZa4aaM64_bLDJFSOWeE6ZE4c',
	authDomain: 'mokkikalenteri-9d64c.firebaseapp.com',
	databaseURL:
		'https://mokkikalenteri-9d64c-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'mokkikalenteri-9d64c',
	storageBucket: 'mokkikalenteri-9d64c.appspot.com',
	messagingSenderId: '670535971653',
	appId: '1:670535971653:web:7cda674fda68f306b5042c',
	measurementId: 'G-4XKSPL5TJK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.addEventListener('click', () => auth.signInWithPopup(provider));

signOutBtn.addEventListener('click', () => auth.signOut());

auth.onAuthStateChanged((user) => {
	if (user) {
		// Signed in
		whenSignedIn.hidden = false;
		whenSignedOut.hidden = true;
		userDetails.innerHTML = `<h3>Hei ${user.displayName}!</h3> <p>Käyttäjä ID: ${user.uid}</p>`;
	} else {
		// Not signed in
		whenSignedIn.hidden = true;
		whenSignedOut.hidden = false;
		userDetails.innerHTML = '';
	}
});
