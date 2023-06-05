import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth';
import { Pages } from '@/routes';

type GuardedRouteProps = {
  component: JSX.Element;
};

const GuardedRoute = ({ component }: GuardedRouteProps) => {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? component : <Navigate to={Pages.Login} />}</>;
};

export default GuardedRoute;
