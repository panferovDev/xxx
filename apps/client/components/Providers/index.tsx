'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from '../../features/redux/store';

export function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
