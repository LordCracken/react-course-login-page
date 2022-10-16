import { useState, useEffect, createContext, ReactNode } from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

interface IAuthContextProvider {
  children: ReactNode;
}

const initialState = {
  isLoggedIn: false,
  onLogin: () => {
    return;
  },
  onLogout: () => {
    return;
  },
};

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedCredentials = localStorage.getItem('isLoggedIn');

    if (storedCredentials === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
