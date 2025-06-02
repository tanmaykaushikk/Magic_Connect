import React,{createContext, useContext,useState} from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const signIn = (username) => {
    setUser(username);
  }
  const signOut = () => {
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{
        user,signIn,signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext);
}
