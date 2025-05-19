import React, { createContext } from "react";
import { app } from "../firebase/firebase.init";
import { getAuth } from "firebase/auth";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const authData = {
    name: "faimuu",
    age: 62,
    auth,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
