import React from 'react';
import NavBar from './index';
import { useServerSession } from '../../../hooks/useAuth';

export default async function Header(): Promise<JSX.Element> {
  const session = await useServerSession();
  return (
    <header>
      {session ? <NavBar session={session} /> : <span className="text-center mt-3 text-lg uppercase">ElbrusHelper</span>}
    </header>
  );
}
