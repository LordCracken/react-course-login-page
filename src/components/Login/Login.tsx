import { useState, useEffect, useReducer, FormEvent, ChangeEvent } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import { emailReducer, passwordReducer } from '../../reducers';

import { ILogin } from '../../interfaces';
import { EmailTypes, PasswordTypes } from '../../reducersInterfaces';
import classes from './Login.module.css';

const Login = ({ onLogin }: ILogin) => {
  // const [enteredEmail, setEnteredEmail] = useState<string>('');
  // const [emailIsValid, setEmailIsValid] = useState<boolean>();
  // const [enteredPassword, setEnteredPassword] = useState<string>('');
  // const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid((emailState.isValid && passwordState.isValid) ?? false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: EmailTypes.userInput, val: event.target.value });

    // setFormIsValid(!!emailState.isValid && !!passwordState.isValid);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: PasswordTypes.userInput, val: event.target.value });

    // setFormIsValid(!!emailState.isValid && !!passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: EmailTypes.inputBlur });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: PasswordTypes.inputBlur });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
