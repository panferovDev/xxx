'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@xxx/ui-components/Select';
import { Button } from '@xxx/ui-components/Button';
import useSelectGroup from '../../../../hooks/useSelectGroup';

export default function GroupSelect(): JSX.Element {
  const {
    groups, changeHandler, selectedGroup, pairGenerateHandler,
  } = useSelectGroup();

  return (
    <div className="flex md:flex-row flex-col gap-2 mb-10">
      <Select onValueChange={changeHandler}>
        <SelectTrigger className="md:w-10/12 w-full">
          <SelectValue placeholder="Выбор группы" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Группы</SelectLabel>
            {groups.map((group) => (
              <SelectItem key={group.id} value={String(group.id)}>
                {group.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        onClick={() => selectedGroup && void pairGenerateHandler(selectedGroup)}
        disabled={selectedGroup === null}
      >
        сгенерировать
      </Button>
    </div>
  );
}
