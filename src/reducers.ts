import {
  EmailTypes,
  PasswordTypes,
  IEmailActions,
  IEmailState,
  IPasswordActions,
  IPasswordState,
} from './reducersInterfaces';

export const emailReducer = (state: IEmailState, action: IEmailActions): IEmailState => {
  switch (action.type) {
    case EmailTypes.userInput:
      return { value: action.val || '', isValid: action.val!.includes('@') };
    case EmailTypes.inputBlur:
      return { value: state.value, isValid: state.value.includes('@') };
    default:
      return { value: '', isValid: null };
  }
};

export const passwordReducer = (
  state: IPasswordState,
  action: IPasswordActions,
): IPasswordState => {
  switch (action.type) {
    case PasswordTypes.userInput:
      return { value: action.val ?? '', isValid: action.val!.trim().length > 6 };
    case PasswordTypes.inputBlur:
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return { value: '', isValid: null };
  }
};
