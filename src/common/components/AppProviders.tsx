import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { PropsWithChildren } from 'react';
import { AuthProvider } from '@/features/auth';

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <AuthProvider>{children}</AuthProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};
