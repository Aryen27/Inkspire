import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType{
  user: any,
  login: (userData: any, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children })=> {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  /*
  1. create function to check and get user data & token from local storage. Use useEffect to check if user has logged in even after the intial render ✅
  2. create a function to add user data & token to local storage.✅
  3. create a function to log the user out. ✅
  4. Return user, login, logout & isAuthenticated to children.
  */
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  }, []);
  
  const login = (userData: any, token: string) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token',JSON.stringify(token));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Auth hook must be used within provider');
  }
  return context;
}

