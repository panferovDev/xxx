'use client';

import type { PairsDayPropsType } from '@xxx/types/pairDaysType';
import React from 'react';

export default function PairWeekDay({ dayGroups }: PairsDayPropsType): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row gap-1 w-full border border-purple-700 border-opacity-30">
      <div className="flex justify-center border-r border-purple-700 border-opacity-30 w-full sm:w-2/12">
        <span className="text-lg self-center font-semibold">{dayGroups.day}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full sm:w-10/12 p-3">
        {dayGroups.groupActivityDays.subgroup.subgrups.map((subgroup) => (
          <div key={subgroup.id} className="flex flex-col gap-2 my-1">
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
