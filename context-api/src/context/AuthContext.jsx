import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState("Login");
  // const [token, setToken] = useState();

  const ToggleAuth = () => {
    setAuth(auth === "Login" ? "Logout" : "Login");
  };
  return (
    <AuthContext.Provider value ={{ auth,ToggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

