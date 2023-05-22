import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './common/pages';
import App from './App';
import { AuthRoutes } from './features/auth';

export const router = createBrowserRouter([
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/', element: <App /> },
  { path: '/auth/*', element: <AuthRoutes /> },
]);
