import React, { type ReactNode } from 'react';
import { AppProviderContext } from './app';

interface Props {
  children: ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <AppProviderContext>
      {children}
    </AppProviderContext>
  );
};