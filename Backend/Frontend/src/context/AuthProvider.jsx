import { createContext, useContext, useState } from "react"

export const AuthContext = createContext();

export default function AuthProvider ({children}){
  const initialAuthUser = localStorage.getItem("Users");
  const [Authuser, setAuthuser] = useState(
    initialAuthUser?JSON.parse(initialAuthUser):undefined
  )

  return (
    <AuthContext.Provider value={[Authuser, setAuthuser]}>
        {children}
    </AuthContext.Provider>
  )


}

export const useAuth = ()=> useContext(AuthContext);