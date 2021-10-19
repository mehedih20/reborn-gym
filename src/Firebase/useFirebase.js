import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./firebase-init";

initializeAuthentication();

const useFirebase = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [formMsg, setFormMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createNewUser = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: username,
        }).then(() => {});
        sendEmailVerification(auth.currentUser).then(() => {
          setIsLoading(false);
          setFormMsg("Verification email sent. Check your mail!");
        });
      })
      .catch((error) => {
        setFormMsg(error.message);
      });
  };

  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setUser(user);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    createNewUser,
    emailLogin,
    user,
    setUser,
    formMsg,
    setFormMsg,
    isLoading,
    setIsLoading,
    googleSignIn,
    loading,
    setLoading,
  };
};

export default useFirebase;
