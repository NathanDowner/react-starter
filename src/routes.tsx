import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './common/pages';
import App from './App';

export const router = createBrowserRouter([
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/', element: <App /> },
]);
