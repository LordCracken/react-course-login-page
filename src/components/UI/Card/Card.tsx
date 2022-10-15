import { ICard } from '../../../interfaces';
import classes from './Card.module.css';

const Card = ({ children, className }: ICard) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
