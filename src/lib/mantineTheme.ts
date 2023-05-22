import { MantineThemeOverride, ModalProps } from '@mantine/core';

export const theme: MantineThemeOverride = {};

export const modalProps: Partial<Omit<ModalProps, 'opened'>> = {
  centered: true,
  size: 'xl',
};
