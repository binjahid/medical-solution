import React, { createContext } from "react";

import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContaxt = useFirebase();
  return (
    <AuthContext.Provider value={allContaxt}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
