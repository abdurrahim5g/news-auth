import { createContext, useContext, useEffect, useState } from "react";
const AuthContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => useContext(AuthContex);

import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Abdur Rahim" });
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  // provider login
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // user signOut
  const logOut = () => {
    return signOut(auth);
  };

  // check auth  state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unSubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authInfo = { user, loading, auth, providerLogin, logOut };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
