import { createContext , useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [auth ,setAuth] = useState(false);
    

    const ToggleAuth = () =>{
       setAuth(auth === false ? "Logout" : "Login")
    }
    return (
       <AuthContext.Provider value = {{auth, ToggleAuth}}>
           {children}
       </AuthContext.Provider>
    )
}