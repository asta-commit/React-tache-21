// import firebase from "firebase";
import app from "firebase/app";
// Nous allons activer une option d'auhentification 
import 'firebase/auth';

    
const config = {
  apiKey: "AIzaSyCRmuTtSMHr8iHNPci0PuYFXw2yhhpdwwo",
  authDomain: "myfirstprojet-cb0ed.firebaseapp.com",
  databaseURL: "https://myfirstprojet-cb0ed-default-rtdb.firebaseio.com",
  projectId: "myfirstprojet-cb0ed",
  storageBucket: "myfirstprojet-cb0ed.appspot.com",
  messagingSenderId: "282813706827",
  appId: "1:282813706827:web:cdd67eb626076c042f13ce",
  measurementId: "G-VGZE90Z3WG",
};


class Firebase{
    constructor() {
        app.initializeApp(config);
        // Nous allons implementer l'API d'authentification
       this.auth = app.auth() ;
    }
    // Inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    
  //Connexion 
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    
    
// Deconnexion
    signOutUser =  () => this.auth.signOut()
    
    
    
}
    
export default Firebase;
























