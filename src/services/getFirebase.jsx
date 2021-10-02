import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC8Cl0GlaQOKwkOjOHQ9YO7J4XbNfV6ugg",
    authDomain: "lapuertadejapon.firebaseapp.com",
    projectId: "lapuertadejapon",
    storageBucket: "lapuertadejapon.appspot.com",
    messagingSenderId: "616947914712",
    appId: "1:616947914712:web:2bb0352fc3de7e4845c4ad"
};

const app = firebase.initializeApp(firebaseConfig)  

export function getFirestore(){
    return firebase.firestore(app)
}