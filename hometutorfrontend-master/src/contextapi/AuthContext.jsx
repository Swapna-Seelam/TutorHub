import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Provider component to manage login states and user data
export function AuthProvider({ children }) 
{
  // Load initial state from localStorage or default to false/null
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('isAdminLoggedIn') === 'true';
  });

  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(() => {
    return localStorage.getItem('isStudentLoggedIn') === 'true';
  });
  
  const [isTutorLoggedIn, setIsTutorLoggedIn] = useState(() => {
    return localStorage.getItem('isTutorLoggedIn') === 'true';
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAdminLoggedIn', isAdminLoggedIn);
    localStorage.setItem('isStudentLoggedIn', isStudentLoggedIn);
    localStorage.setItem('isTutorLoggedIn', isTutorLoggedIn);
  }, [isAdminLoggedIn, isStudentLoggedIn, isTutorLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        isStudentLoggedIn,
        setIsStudentLoggedIn,
        isTutorLoggedIn,
        setIsTutorLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the context
export const useAuth = () => useContext(AuthContext);
