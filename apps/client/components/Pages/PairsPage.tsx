import React from 'react';
import PairsScheduleWrap from '../UI/PairsUi/PairScheduleWrap';
import GroupSelect from '../UI/PairsUi/PairsGroupSelect/GroupSelect';
import DaysCard from '../UI/PairsUi/DaysCard';

export default function PairsPage(): JSX.Element {
  return (
    <div className="flex md:flex-row flex-col gap-5 mb-10">
      <div className="w-12/12 md:w-9/12">
        <GroupSelect />
        <PairsScheduleWrap />
      </div>
      <div className="w-12/12 md:w-3/12">
        <DaysCard />
      </div>
    </div>
  );
}
