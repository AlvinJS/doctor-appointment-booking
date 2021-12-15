
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDt_R8sSTTamTRNfNhLki29q1OdaEXLNXo",
  authDomain: "appointment-app-29762.firebaseapp.com",
  projectId: "appointment-app-29762",
  storageBucket: "appointment-app-29762.appspot.com",
  messagingSenderId: "638168468461",
  appId: "1:638168468461:web:0a675d4ef7376188d235e4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;




