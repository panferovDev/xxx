import React from 'react';
import DaysCard from '../UI/PairsUi/DaysCard';

export default function PairsPage(): JSX.Element {
  return (
    <div className="flex md:flex-row flex-col gap-5 mb-10">
      <div className="w-12/12 md:w-9/12">1</div>
      <div className="w-12/12 md:w-3/12">
        <DaysCard />
      </div>
    </div>
  );
}
