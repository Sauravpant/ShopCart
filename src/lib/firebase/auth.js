import {getAuth,GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup,signOut,createUserWithEmailAndPassword} from "firebase/auth"
import { app } from "./config";

const auth =getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpWithEmail = async (auth,email,password) => {
  try{
    const userCredential= await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  }
  catch(error) {
    throw error;
  }
}

export const signInWithEmail = async (auth,email,password) => {
  try{
    const userCredential= await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  }
  catch(error) {
    throw error;
  }
}

export const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth,provider);
    return result.user;
  }
  catch (error) {
    console.log("Google Sign in Failed",error.message);
    throw error;
    
  }
}

export const logout = async (auth) => {
  await signOut(auth);
}