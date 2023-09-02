'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import type { PreloadedType } from '@xxx/types/preloadedType';
import store from '../../features/redux/store';

export function Providers({
  preloadedState,
  children,
}: {
  children: React.ReactNode;
  preloadedState: PreloadedType;
}): JSX.Element {
  return (
    <SessionProvider>
      <Provider store={store(preloadedState)}>{children}</Provider>
    </SessionProvider>
  );
}
