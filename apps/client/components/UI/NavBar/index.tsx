'use client';

import React from 'react';
import { Button } from '@xxx/ui-components/Button';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Navigation from './Navigation';
import Theme from '../theme';

export default function NavBar({ session }: { session: Session | null }): JSX.Element {
  const logoutHandler = (): void => {
    signOut({ callbackUrl: '/' }).catch((error) => {
      console.error('Logout error', error);
    });
  };
  return (
    <nav>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between py-4">
        <span className="self-start text-2xl text-violet-600 font-semibold whitespace-nowrap">
          ElbrusHelper
        </span>
        <div
          className="hidden flex-1 custom:flex custom:justify-end gap-1 custom:items-center  w-full custom:w-auto"
          id="navbar-default"
        >
          {session && (
            <>
              <Navigation />
              <div className="flex justify-center items-center gap-1">
                <span className="mr-2">Привет, {session.user?.name} </span>
                <Theme />
                <Button onClick={logoutHandler} variant="outline">
                  Logout
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
