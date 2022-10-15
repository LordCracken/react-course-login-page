import Navigation from './Navigation';

import { IMainHeader } from '../../interfaces';
import classes from './MainHeader.module.css';

const MainHeader = ({ isAuthenticated, onLogout }: IMainHeader) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
