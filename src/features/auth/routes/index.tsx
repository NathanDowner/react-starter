import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage';

export const AuthRoutes = () => (
  <Routes>
    <Route path="login" element={<LoginPage />} />
  </Routes>
);
