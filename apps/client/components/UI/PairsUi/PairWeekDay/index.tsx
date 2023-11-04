'use client';

import type { PairsDayPropsType } from '@xxx/types/pairDaysType';
import { RefreshCcw } from 'lucide-react';
import React from 'react';
import useDayRefresh from '../../../../hooks/useDayRefresh';

export default function PairWeekDay({
  dayGroups,
  week,
}: PairsDayPropsType & { week: string }): JSX.Element {
  const { refreshDay } = useDayRefresh();

  return (
    <div className="grid grid-cols-1  md:grid-cols-[1fr,5fr] relative gap-1 w-full group border border-purple-700 border-opacity-30">
      <div className=" opacity-0 transition-opacity duration-400 group-hover:opacity-100 absolute bg-white dark:bg-slate-950 top-[-14px] rounded-lg right-[-7px] w-6 h-6 text-orange-700 text-opacity-70 hover:text-opacity-100 cursor-pointer">
        <RefreshCcw
          size={25}
          className="hover:animate-spin-reverse"
          strokeWidth={2.5}
          onClick={() => {
            void refreshDay({
              id: dayGroups.groupActivityDays.subgroup.id,
              type: dayGroups.groupActivityDays.type,
              groupId: dayGroups.groupActivityDays.groupId,
              weekDay: week,
            });
          }}
        />
      </div>
      <div className="flex items-center justify-center border-purple-700 border-opacity-30 ">
        <span className="self-center uppercase font-semibold">{dayGroups.day}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 p-2">
        {dayGroups.groupActivityDays.subgroup.subgrups.map((subgroup, index) => (
          <div
            key={subgroup.id}
            className="flex flex-col dark:bg-purple-500 dark:bg-opacity-10 bg-purple-100  p-2 relative"
          >
            <span className="absolute top-0 left-2 text-orange-500">{index + 1}</span>
            <ul className="list-inside list-decimal p-1">
              {subgroup.students.map((student) => (
                <li
                  key={student.id}
                  className="text-center"
                  style={{ color: student.repeat ? 'gray' : '' }}
                >
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
