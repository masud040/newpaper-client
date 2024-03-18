import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { auth } from "../firebase";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Current user>", currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authData = {
    user,
    loading,
    setLoading,
    registerUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
