import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, getCurrentScout, testRegisterScoutInFirestore  } from "../firebase.config";
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children} ) => {

  //INIT
  const users = ['luis38armando@yahoo.com.mx', 'yosclilia@hotmail.com', 'mayraave@hotmail.com', 'aolmedo@psmedical.mx', 'enrique10maciel@gmail.com', 'pfdario@gmail.com', 'mari_acela@live.com', 'melivegalopz@gmail.com', 'hfecmrr@hotmail.com', 'chivas131556@gmail.com', 'zulycastillo420@gmail.com', 'magallanesk77@gmail.com', 'raquisjasso@gmail.com', 'inggruizg@gmail.com', 'elp136@hotmail.com', 'R.RUVALCABA@PRODIGY.NET.MX', 'E.ARELLANO@PRODIGY.NET.MX', 'DANA.RUVAL@GMAIL.COM', 'melisabebe2014@hotmail.com', 'chivas131556@hotmail.com', 'raquisjasso@hotmail.com', 'yeniselhrt@hotmail.com', 'adyrobles@hotmail.com', 'samdsmx@hotmail.com', 'mystica156@hotmail.com', 'oscarcesarr@hotmail.com', 'r.ruvalcaba@prodigy.net.mx', 'akelaggg@hotmail.com', 'semysc72@gmial.com', 'roci_ogreen@hotmail.com', 'rstemplario@hotmail.com', 'jacobhuerta@hotmail.com', 'iangordito6@gmail.com', 'vechasol72@hotmail.com', 'valeryhg@outloo.es', 'SALVADOR74@YAHOO.COM', 'adanyaelrojasnieto@gmail.com', 'yinanieto.yn@gmail.com', 'rgtzbeto@gmail.com', 'JPEREZ_RUBIO@HOTMAIL.COM', 'e.arellano@prodigy.net.mx', 'ingjmmartinez@yahoo.com.mx', 'lucyss16@hotmail.com', 'tori810.910@hotmail.com', 'ecotecnias@hotmail.com', 'npalomino1976@hotmail.com', 'varroyor@hotmail.com', 'lopestra74@hotmail.com', 'jjestrada71@hotmail.com', 'gabyys613@gmail.com', 'YOMEMOBANDO@GMAIL.COM', 'joralegarrod@hotmail.com', 'jaz_anely@hotmail.com', 'vanessa_azeneth693@outlook.es']
  const registerInFirebase = () =>{
    var count = 2800;
    users.forEach(async(email) => {
      await signUp(email, '123456Abc')
    })
    
  }
  // FINISH
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
      console.log('Auth Data',auth.currentUser)
      const userEmail = auth.currentUser.email
      const currentScoutData = await getCurrentScout(userEmail)
      console.log(currentScoutData)
      currentScoutData.length > 0 ? 
      currentScoutData.forEach(doc =>{
        scouts.push(doc.data())
      })
      : console.log('No se encontraron')
      
  
      setCurrentUser({
        uid:auth.currentUser.uid,
        email:auth.currentUser.email,
        //nombre_completo: scouts[0].nombre_completo,
        //seccion: scouts[0].seccion,
      })
    }
  }

  //Checks if an user exist in Firebase, and logs it in
  const Login = (email, password) => 
    signInWithEmailAndPassword(auth, email, password)

  return (
    <authContext.Provider value={{ signUp, Login, getCurrentUser, currentUser, setCurrentUser, LogOut, registerInFirebase}}>
      {children}
    </authContext.Provider>
  );
};
