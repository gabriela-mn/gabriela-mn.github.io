import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

// TODO: Replace the following with your appFirebase's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Función para registrar al usuario en Firebase Authentication y agregarlo a Firestore
async function registerUserAndAddToFirestore(email, password) {
  try {
    // Inicializa la autenticación de Firebase y obtén una referencia al servicio
    const auth = getAuth();

    // Registra al usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("Usuario registrado exitosamente:", user);
    // Muestra un mensaje emergente de éxito
    alert("Usuario registrado exitosamente.");
    // Limpia los campos del formulario
    const signupForm = document.getElementById("signupForm");
    signupForm.reset();

    // Guarda la información del usuario en Firestore Lite
    const db = getFirestore(app);
    const usersCollection = collection(db, "users");
    await addDoc(usersCollection, {
      uid: user.uid,
      email: user.email,
    });
    console.log("Usuario agregado a Firestore Lite");
  } catch (error) {
    console.error("Error durante el registro y/o agregado a Firestore:", error);
  }
}

// Función para manejar el evento de envío del formulario
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  // Llamada a la función para registrar al usuario y agregarlo a Firestore
  registerUserAndAddToFirestore(email, password);
}

// Agrega un evento al formulario para manejar el envío
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", handleFormSubmit);
