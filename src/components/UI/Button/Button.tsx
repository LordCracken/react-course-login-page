import { IButton } from '../../../interfaces';
import classes from './Button.module.css';

const Button = ({ children, type = 'button', className, disabled, onClick }: IButton) => {
  return (
    <button
      type={type}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
