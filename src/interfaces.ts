import { ChangeEvent, ReactNode } from 'react';

export interface ICard {
  children: ReactNode;
  className: string;
}

export interface IButton {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface IInput {
  id: string;
  value: string;
  label: string;
  type: string;
  isValid: boolean | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}
