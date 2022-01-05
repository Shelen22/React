import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState();

  const ToggleAuth = () => {
    setAuth(auth);
  };
  const Register = async (e) => {
    try {
      let req = await fetch(`https://reqres.in/api/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(e),
      });
      let result = await req.json();
      setToken(result.token);
    } catch (err) {
      console.log(err);
    }
  };

//   const ToggleAuth = () => {
//     setAuth(auth === false ? "Logout" : "Login");
//   };
  return (
    <AuthContext.Provider value={{ auth,ToggleAuth ,Register,token ,setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

