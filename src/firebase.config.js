import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  documentId,
  updateDoc,
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
const actualMonth = d.getMonth() + 1;
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const database = getFirestore(app);
export const auth = getAuth();

//Scout
export const getCurrentScout = (userEmail) => {
  console.log(database);
  const q = query(
    collection(database, "Test"),
    where("correo_electronico", "==", userEmail)
  );
  return getDocs(q);
};

export const registerScoutInFirestore = (userAuthData, scoutData) =>
  setDoc(doc(database, "Test", userAuthData.email), {
    correo_electronico: userAuthData.email,
    nombre_completo: scoutData.nombre_completo,
    seccion: scoutData.seccion,
    //-----
    apellido_materno: "Tu apellido Materno",
    apellido_paterno: "Tu apellido paterno",
    calle: "Tu calle",
    cia: "Tu CIA",
    colonia: "Tu colonia",

    cp: "Tu Codigo Postal",
    nombre_completo: "Your Name",
    delegacion: "Tu delegación",
    edad: "Tu edad",
    edad_con_meses: "1",
    fecha_de_nacmimento: new Date(),
    grupo: "Tu grupo",
    grupo_2: "Tu grupo 2",
    id: "counter",
    mes: "1",
    nombres: "tus nombres",
    num_exterior: "tu numero exterior",
    num_interior: "tu numero interior",
    remesa: "1",
    seguro: "Vencido",
    sexo: "/",
    telefono_casa: "5555555555",
    telefono_emergencia: "55555555555",
  });

//Edit Scout Data
export const updateScoutData = (email, scoutData) => {
  console.log("desde updateScoutData",scoutData)
  const scoutRef = doc(database, "Test", email);
  return updateDoc(scoutRef, {
    ...scoutData,
  });
};

//Queries
export const getBirthdayScouts = () =>
  getDocs(
    query(collection(database, "BD 22"), where("mes", "==", actualMonth))
  );

export const getScouts = () => getDocs(collection(database, "BD 22"));

export const getScouts21 = () => getDocs(collection(database, "BD 21"));

export const getScouts20 = () => getDocs(collection(database, "BD 20"));

export const getScouts19 = () => getDocs(collection(database, "BD 19"));

export const getScouts18 = () => getDocs(collection(database, "BD 18"));

export const getTestScouts = () => getDocs(collection(database, "Test"));

// Changes the profile picture of every user to default
export const setProfilePic = (data, email) => {
  console.log(data, email);
  const scoutRef = doc(database, "Test", email);
  const URL = "https://firebasestorage.googleapis.com/v0/b/agsmac-6f212.appspot.com/o/scoutProfilePictures%2Fdefault-pp.png?alt=media&token=f2da7676-891d-4059-a9d5-5ed9f4c3b8ee"
  console.log(scoutRef);
  updateDoc(scoutRef, {foto_de_perfil:URL})
};

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

//Image Upload
export const uploadProfilePicture = (file, email) => {
  const imageRef = ref(storage, `scoutProfilePictures/${email}/${file.name}`);
  return uploadBytes(imageRef, file)
    .then(async () => {
      const URL = await getDownloadURL(imageRef);
      return URL;
    })
    .catch((err) => console.log(err));
};

export default database;
