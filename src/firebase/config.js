import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC37uGJCeXtxzxJvnz6N7oMWVYm5haXaag",
    authDomain: "vue-blog-system-925e6.firebaseapp.com",
    projectId: "vue-blog-system-925e6",
    storageBucket: "vue-blog-system-925e6.appspot.com",
    messagingSenderId: "330323370683",
    appId: "1:330323370683:web:a45ced4342b62ae64a7f9e"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let auth=firebase.auth();

export {db,timestamp,auth};
