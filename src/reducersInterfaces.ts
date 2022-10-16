export enum EmailTypes {
  userInput = 'USER_INPUT',
  inputBlur = 'INPUT_BLUR',
}

export enum PasswordTypes {
  userInput = 'USER_INPUT',
  inputBlur = 'INPUT_BLUR',
}

export interface IEmailState {
  value: string;
  isValid: boolean | null;
}

export interface IEmailActions {
  type: EmailTypes;
  val?: string;
}

export interface IPasswordState {
  value: string;
  isValid: boolean | null;
}

export interface IPasswordActions {
  type: PasswordTypes;
  val?: string;
}
