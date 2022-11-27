import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmlFW4MyfWPM-7p4E8Z_fxK_oLGytv6PA",
  authDomain: "dwrdvncntcvs-portfolio.firebaseapp.com",
  projectId: "dwrdvncntcvs-portfolio",
  storageBucket: "dwrdvncntcvs-portfolio.appspot.com",
  messagingSenderId: "159180020678",
  appId: "1:159180020678:web:e047ec057559bc639d30c7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
