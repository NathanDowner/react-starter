import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Transitions } from '@/common/components';
import Aside from './Aside';

const Dashboard: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Aside isDrawerOpen={isDrawerOpen} />
      <div className="grow bg-gray-light">
        <div className="h-[210px] bg-primary py-6 px-8 pb-20 text-white">
          <Header
            onOpenDrawer={() => setIsDrawerOpen(true)}
            onLogout={() => {}}
          />

          <p className="font-light">
            Welcome to Unbank, go ahead and check out your dashboard
          </p>
        </div>
        {/* Backdrop */}
        <Transitions.FadeIn reveal={isDrawerOpen}>
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="fixed top-0 left-0 z-40 h-screen w-screen bg-[rgba(0,0,0,0.3)]"
          />
        </Transitions.FadeIn>
        <main className="relative -top-20 mx-2 md:mx-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
