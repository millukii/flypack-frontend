import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { uuid } from 'uuidv4';

export function firebaseConfig(){
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);

}

export function firebaseRegistrarUsuario(email, password) {

  createUserWithEmailAndPassword(getAuth(), email, password)
  .then(credenciales=>{
    console.log(credenciales);
  })

}

export async function firebaseIniciarSesion(email, password){

  try {
      let credenciales = await signInWithEmailAndPassword(getAuth(), email, password)
    alert(credenciales)
  } catch (error) {
    return false
  }
  return true
}

export async function firebaseBuscar(col){

  let listado = [];
  let consulta = collection(getFirestore(), col);

  let result =await getDocs(consulta);

  result.forEach(documento => {
    let objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });

  return listado;
}


export function firebaseCrear(coleccion, objeto) {
  objeto.id = uuid();
  let referencia = doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);
}

export async function firebaseEliminar(coleccion, id) {
  await deleteDoc(doc(getFirestore(), coleccion, id));
}
