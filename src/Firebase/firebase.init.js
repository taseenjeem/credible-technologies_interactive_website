import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyByVRYbkVpIbCZrUxOQxJL3foa9mutjvrs",
    authDomain: "credible-technologies.firebaseapp.com",
    projectId: "credible-technologies",
    storageBucket: "credible-technologies.appspot.com",
    messagingSenderId: "870811966539",
    appId: "1:870811966539:web:80b067470aba3d46df41ce"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;