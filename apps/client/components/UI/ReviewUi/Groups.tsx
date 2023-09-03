'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@xxx/ui-components/Select';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

import React from 'react';

export default function Groups(): JSX.Element {
  const groups = useAppSelector((state) => state.groups);
  return (
    <div className="flex flex-col gap-5 mt-2">
      <h3 className=" text-gray-400 ">Группа:</h3>
      <Select name="gId" required>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Выбор группы" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Groups</SelectLabel>
            {groups.map((group) => (
              <SelectItem key={group.id} value={`${group.id}`}>
                {group.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
