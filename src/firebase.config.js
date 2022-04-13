import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  documentId,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNSmt5Gsjzz5MzvU1_nBmviwcE3sahZoI",
  authDomain: "agsmac-6f212.firebaseapp.com",
  databaseURL: "https://agsmac-6f212-default-rtdb.firebaseio.com",
  projectId: "agsmac-6f212",
  storageBucket: "agsmac-6f212.appspot.com",
  messagingSenderId: "1095093239497",
  appId: "1:1095093239497:web:4ae6b4bfc8755b90349718",
};


// Initialize Firebase
const d = new Date();
const actualMont = d.getMonth() + 1;
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();

//Scout
export const getScouts = () => getDocs(collection(database, "BD 22"));

export const getCurrentScout = (userId) => getDocs(query(collection(database,"Test"), where(documentId(), '==', userId )));

export const registerScoutInFirestore = (userAuthData, scoutData) =>
  setDoc(doc(database, "Test", userAuthData.uid), {
    email: userAuthData.email,
    nombre_completo:scoutData.nombre_completo,
    seccion: scoutData.seccion
  });

export const getBirthdayScouts = () =>
  getDocs(query(collection(database, "BD 22"), where("mes", "==", actualMont)));

export const getScouts21 = () => getDocs(collection(database, "BD 21"));

export const getScouts20 = () => getDocs(collection(database, "BD 20"));

export const getScouts19 = () => getDocs(collection(database, "BD 19"));

export const getScouts18 = () => getDocs(collection(database, "BD 18"));

export const getScoutsWithoutCredentials = () =>
  getDocs(query(collection(database, "BD 22"), where("credencial", "==", "")));

export const getScoutsWithoutMedicalInsuranceNA = () =>
  getDocs(query(collection(database, "BD 22"), where("seguro", "==", "#N/A")));

export const getScoutsWithoutMedicalInsurance = () =>
  getDocs(
    query(collection(database, "BD 22"), where("seguro", "==", "Sin Cobertura"))
  );

export const getScoutsWithExpiredMedicalInsurance = () =>
  getDocs(
    query(collection(database, "BD 22"), where("seguro", "<", new Date()))
  );
//Activities
export const getActivities = () =>
  getDocs(collection(database, "Actividades 22"));

export default database;
