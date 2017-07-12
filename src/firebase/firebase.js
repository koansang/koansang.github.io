import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBrFmslGn2VvB0cxHptqzZBp6oqryhMYEM',
  authDomain: 'my-home-ee5b1.firebaseio.com',
  databaseURL: 'https://my-home-ee5b1.firebaseio.com',
  storageBuket: 'my-home-ee5b1.appspot.com',
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

export {
  database,
  storage,
};

