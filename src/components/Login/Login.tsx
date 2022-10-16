import { useState, useEffect, useReducer, useContext, useRef, FormEvent, ChangeEvent } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import { emailReducer, passwordReducer } from '../../reducers';
import AuthContext from '../../store/auth-context';

import { EmailTypes, PasswordTypes } from '../../reducersInterfaces';
import classes from './Login.module.css';

const Login = () => {
  const ctx = useContext(AuthContext);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

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

    if (formIsValid) {
      ctx.onLogin();
    } else if (!emailState.isValid) {
      emailInputRef.current?.focus();
    } else {
      passwordInputRef.current?.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          value={emailState.value}
          label="E-Mail"
          type="email"
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          value={passwordState.value}
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
