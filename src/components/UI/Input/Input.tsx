import { useRef, useImperativeHandle, forwardRef } from 'react';

import { IInput } from '../../../interfaces';
import classes from './Input.module.css';

const Input = forwardRef(({ id, value, label, type, isValid, onChange, onBlur }: IInput, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const activate = () => {
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    focus: activate,
  }));

  return (
    <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} ref={inputRef} />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
