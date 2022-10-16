import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
);
