'use client';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';
import React from 'react';
import PairWeekDay from '../PairWeekDay';

export default function PairsScheduleWrap(): JSX.Element {
  const schedule = useAppSelector((state) => state.pairDays.groupPairs);
  return (
    <div className="flex md:flex-col flex-row mb-10">
      {schedule.map((week) => (
        <div key={week.week} className="flex flex-col gap-3 w-full mb-2">
          <h3 className="text-lg  font-semibold">{week.week}</h3>
          {week.days.map((day) => <PairWeekDay key={day.id} dayGroups={day} />)}
        </div>
      ))}
    </div>
  );
}
