import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserType = localStorage.getItem('userType');

    if (token && storedUserType) {
      setIsLoggedIn(true);
      setUserType(storedUserType);
    }
  }, []);

  const login = (token, userType) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userType', userType);
    setIsLoggedIn(true);
    setUserType(userType);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};