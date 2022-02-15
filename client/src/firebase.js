import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseApp = initializeApp({
   /* Replace the following with your app's Firebase project configuration */
});
 


const auth = getAuth();

export {auth};