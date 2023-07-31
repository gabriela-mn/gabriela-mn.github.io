import _ from 'lodash';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

// Carga las variables de entorno desde el archivo .env
//import dotenv from "dotenv";
//dotenv.config();

// TODO: Replace the following with your appFirebase's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };
  
  const email = "anagabriela.manobanda@epn.edu.ec";
  const password = "ana20130209";
  
  // Inicializa Firebase
  const app = initializeApp(firebaseConfig);
  
  // Inicializa la autenticación de Firebase y obtén una referencia al servicio
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario registrado exitosamente
      const user = userCredential.user;
      console.log(user);
  
      // Guarda la información del usuario en Firestore Lite
      const db = getFirestore(app);
      const usersCollection = collection(db, "users");
      addDoc(usersCollection, {
        uid: user.uid,
        email: user.email,
      })
        .then(() => {
          console.log("Usuario agregado a Firestore Lite");
        })
        .catch((error) => {
          console.error("Error al agregar usuario a Firestore Lite:", error);
        });
    })
    .catch((error) => {
      // Ocurrió un error durante el registro
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });