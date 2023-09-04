'use client';

import { GroupType } from '@xxx/types/studentsGroup';
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

export type GroupsProps = {
  setGroupHandler: (data: GroupType | null) => void;
};

export default function Groups({ setGroupHandler }: GroupsProps): JSX.Element {
  const groups = useAppSelector((state) => state.groups);

  const changeHandler = (id: string) => {
    const group = groups.find((group) => group.id === Number(id));
    setGroupHandler(group ? group : null);
  };

  return (
    <div className="flex flex-col gap-5 mt-2">
      <h3 className=" text-gray-400 ">Группа:</h3>
      <Select onValueChange={changeHandler} name="gId" required>
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
