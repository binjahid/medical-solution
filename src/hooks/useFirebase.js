import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initailizeFirebase from "../firebase/firebase.init";
initailizeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    return e.target.value;
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
    return e.target.value;
  };
  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const logInUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
    setIsLoading(false);
  };
  const SignInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.log(error.message));
    setIsLoading(false);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    handleEmail,
    handlePassword,
    registerUser,
    logInUser,
    SignInUsingGoogle,
    user,
    logout,
    isLoading,
  };
};

export default useFirebase;
