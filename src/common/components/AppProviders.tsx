import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { PropsWithChildren } from 'react';

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
};
