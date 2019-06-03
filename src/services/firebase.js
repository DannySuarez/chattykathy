const config = {
    apiKey: 'AIzaSyBmIqVUp0FOlCWeTa_7WGOKksU3bY5Nn_A',
    authDomain: 'solo-aee8f.firebaseapp.com',
    databaseURL: 'https://solo-aee8f.firebaseio.com',
    projectId: 'solo-aee8f',
    storageBucket: 'solo-aee8f.appspot.com',
    messagingSenderId: '538467577608',
    appId: '1:538467577608:web:8339b5f497547ef7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.database();
