import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthRoutes } from './features/auth';
import GuardedRoute from './common/components/GuardedRoute';
import { Dashboard } from './common/pages';

export const Pages = {
  Dashboard: '/dashboard',
  Login: '/auth/login',
};

export const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <GuardedRoute component={<Dashboard />} />,
    children: [
      {
        path: '',
        element: <App />,
      },
    ],
  },
  { path: '/', element: <Navigate to="/dashboard" /> },
  { path: '/auth/*', element: <AuthRoutes /> },
]);
