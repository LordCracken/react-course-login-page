import Card from '../UI/Card/Card';

import { IHome } from '../../interfaces';
import classes from './Home.module.css';

const Home = ({ onLogout }: IHome) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
