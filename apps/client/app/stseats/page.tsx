'use client';

import AddSeatForm from '../../components/UI/AddSeatForm';
import StList from '../../components/UI/StList';
import { useStSeats } from '../../hooks/usseStSeats';

export default function Index(): JSX.Element {
  const { submitHandler, seats } = useStSeats();

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
