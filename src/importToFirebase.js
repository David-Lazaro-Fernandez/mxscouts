import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNSmt5Gsjzz5MzvU1_nBmviwcE3sahZoI",
  authDomain: "agsmac-6f212.firebaseapp.com",
  databaseURL: "https://agsmac-6f212-default-rtdb.firebaseio.com",
  projectId: "agsmac-6f212",
  storageBucket: "agsmac-6f212.appspot.com",
  messagingSenderId: "1095093239497",
  appId: "1:1095093239497:web:4ae6b4bfc8755b90349718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const getBirthdayScouts = () => getDocs(collection(database, "BD 22"))



export default database;