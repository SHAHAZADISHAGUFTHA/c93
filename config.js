import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB1XRWIbO1mq6jVDdv-zdeoTbaiqlXSMSo",
  authDomain: "to-do-list-app-979ad.firebaseapp.com",
  projectId: "to-do-list-app-979ad",
  storageBucket: "to-do-list-app-979ad.appspot.com",
  messagingSenderId: "19256055707",
  appId: "1:19256055707:web:48cf30b8d95894e47ff33e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();