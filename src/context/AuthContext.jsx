import { createContext, useContext, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    return <AuthContext.Provider value={{isAuthenticated}}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider}