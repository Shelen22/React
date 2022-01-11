import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handelToken = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, handelToken }}>
      {children}
    </AuthContext.Provider>
  );
};