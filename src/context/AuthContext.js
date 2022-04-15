import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, getCurrentScout } from "../firebase.config";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children} ) => {
  const [currentUser, setCurrentUser] = useState({
    uid:'',
    email:'',
    nombre_completo:'',
    seccion:''
  })
  
  //Creates a User in Firebase
  const signUp = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

  //Logs out the current user in firebase
  const LogOut = () => auth.signOut()

  //Gets the current user loged in
  const getCurrentUser = async () => {
    const scouts = []
    if(auth.currentUser != null){
      const userId = auth.currentUser.uid
      const currentScoutData = await getCurrentScout(userId)
      currentScoutData.forEach(doc =>{
        scouts.push(doc.data())
      })
  
      setCurrentUser({
        uid:auth.currentUser.uid,
        email:auth.currentUser.email,
        nombre_completo: scouts[0].nombre_completo,
        seccion: scouts[0].seccion,
      })
    }
  }

  //Checks if an user exist in Firebase, and logs it in
  const Login = (email, password) => 
    signInWithEmailAndPassword(auth, email, password)

  return (
    <authContext.Provider value={{ signUp, Login, getCurrentUser, currentUser, setCurrentUser, LogOut}}>
      {children}
    </authContext.Provider>
  );
};
