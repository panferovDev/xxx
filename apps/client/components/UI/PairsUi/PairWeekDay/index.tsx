'use client';

import type { PairsDayPropsType } from '@xxx/types/pairDaysType';
import { RefreshCcw } from 'lucide-react';
import React from 'react';

export default function PairWeekDay({ dayGroups }: PairsDayPropsType): JSX.Element {
  const clickHandler = (id: number, type: string, groupId: number): void => {
    console.log(id, type, groupId);
  };

  return (
    <div className="flex flex-col relative sm:flex-row gap-1 w-full border border-purple-700 border-opacity-30">
      <div className="absolute bg-white dark:bg-slate-950 top-[-14px] rounded-lg right-[-7px] w-6 h-6 text-orange-700 text-opacity-70 hover:text-opacity-100 cursor-pointer">
        <RefreshCcw
          size={32}
          className="animate-spin-reverse"
          strokeWidth={2.5}
          onClick={() =>
            clickHandler(
              dayGroups.groupActivityDays.subgroup.id,
              dayGroups.groupActivityDays.type,
              dayGroups.groupActivityDays.groupId,
            )}
        />
      </div>
      <div className="flex justify-center border-r border-purple-700 border-opacity-30 w-full sm:w-2/12">
        <span className="text-lg self-center font-semibold">{dayGroups.day}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full sm:w-10/12 p-3">
        {dayGroups.groupActivityDays.subgroup.subgrups.map((subgroup, index) => (
          <div
            key={subgroup.id}
            className="flex flex-col gap-2 my-1 dark:bg-purple-500 dark:bg-opacity-10 bg-purple-100 rounded-md p-2 relative"
          >
            <span className="absolute top-0 left-2 text-orange-500">{index + 1}</span>
            <ul className="list-outside list-decimal">
              {subgroup.students.map((student) => (
                <li key={student.id} className="text-center">
                  {student.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
