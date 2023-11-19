'use client';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';
import { Checkbox } from '@xxx/ui-components/Checkbox';
import React from 'react';

export default function Groups(): JSX.Element {
  const groups = useAppSelector((state) => state.groups);
  return (
    <div className="flex flex-col justify-between gap-5 mt-5">
      {groups.map((group) => (
        <div key={group.id} className="flex justify-between">
          <div>
            <p className=" font-medium leading-none">{group.name}</p>
            <p className="text-sm text-muted-foreground">Студентов: {group.students.length}</p>
          </div>
            <Checkbox />
        </div>
      ))}
    </div>
  );
}
