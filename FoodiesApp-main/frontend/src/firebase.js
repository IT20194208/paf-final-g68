import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBMI3xiko93EfS9KyjFAPu8LsEFMujOibE",
  authDomain: "paf-foodie-web-app.firebaseapp.com",
  projectId: "paf-foodie-web-app",
  storageBucket: "paf-foodie-web-app.appspot.com",
  messagingSenderId: "423474206875",
  appId: "1:423474206875:web:ca32fb0092a66a96b18e3e"
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };
