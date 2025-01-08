import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Optional, to store user details.

  const login = (userDetails) => {
    setIsAuthenticated(true);
    setUser(userDetails); // Store user details if necessary.
    localStorage.setItem("auth", JSON.stringify(userDetails)); // Persist authentication.
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("auth"); // Clear persisted state.
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
