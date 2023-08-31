'use client';

import React from 'react';
import { Button } from '@xxx/ui-components/Button';
import type { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Navigation from './Navigation';

export default function NavBar({ session }: { session: Session | null }): JSX.Element {
  const logoutHandler = (): void => {
    signOut({ callbackUrl: '/' }).catch((error) => {
      console.error('Logout error', error);
    });
  };
  return (
    <nav className="">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between py-4">
        <span className="self-start text-2xl text-violet-500 font-semibold whitespace-nowrap">
          ElbrusHelper
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
        </button>
        <Navigation />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {session && (
            <>
              <span className="mr-2">Привет, {session.user?.name} </span>
              <Button onClick={logoutHandler} variant="outline">
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
