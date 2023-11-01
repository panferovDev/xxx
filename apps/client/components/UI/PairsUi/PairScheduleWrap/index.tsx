'use client';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';
import React from 'react';
import PairWeekDay from '../PairWeekDay';
import StudentLink from '../StudentsLink';

export default function PairsScheduleWrap(): JSX.Element {
  const schedule = useAppSelector((state) => state.pairDays.groupPairs);
  return (
    <div className="flex flex-col mb-10">
      <StudentLink />
      {schedule.map((week) => (
        <div key={week.week} className="flex flex-col gap-3 w-full mb-2">
          <h3 className="text-lg text-center underline font-semibold">{week.week}</h3>
          {week.days.map((day) => (
            <PairWeekDay key={day.id} dayGroups={day} week={week.week}/>
          ))}
        </div>
      ))}
    </div>
  );
}
