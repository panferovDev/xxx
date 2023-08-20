'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function GoogleButton(): JSX.Element {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const authHendler = (): void => {
    signIn('google', { callbackUrl }).catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
      <button
        className="g-transparent hover:bg-purple-950 text-myperple hover:text-white py-2 px-4 border border-myperple hover:border-transparent rounded"
        type="button"
        onClick={authHendler}
      >
        SignIn with Google
      </button>
      <span className="text-gray-400 mt-4">ElbrusBootcap emails only</span>
    </>
  );
}
