import { ReactNode } from 'react';

export interface ICard {
  children: ReactNode;
  className: string;
}

export interface IButton {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  className: string;
  onClick?: () => void;
}

export interface ILogin {
  onLogin: (email: string, password: string) => void;
}

export interface IHome {
  onLogout: () => void;
}

export interface IMainHeader {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export interface INavigation {
  isLoggedIn: boolean;
  onLogout: () => void;
}
