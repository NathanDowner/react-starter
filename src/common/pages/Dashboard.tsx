import React from 'react';
import { Outlet } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  return (
    <>
      <div>Dashboard</div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
