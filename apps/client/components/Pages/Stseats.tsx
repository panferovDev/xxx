'use client';

import type { Session } from 'next-auth';
import AddSeatForm from '../UI/AddSeatForm';
import StList from '../UI/StList';
import { useStSeats } from '../../hooks/usseStSeats';
import Denided from '../UI/Denided/Denided';

export default function Index({ session }: { session: Session | null }): JSX.Element {
  const { submitHandler, seats } = useStSeats();
  if (!session?.user) return <Denided />;
  return (
    <>
      <div className="flex mt-10  justify-center">
        <AddSeatForm submitHandler={submitHandler} />
      </div>
      <div className="mt-10">
        <h2 className="text-xl text-center">Список для рассадки:</h2>
        <StList seats={seats} />
      </div>
    </>
  );
}
