'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@xxx/ui-components/Card';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';
import GroupItem from './GroupItem';

function AllGroupsCard(): JSX.Element {
  const groups = useAppSelector((state) => state.groups);
  return (
    <Card className="hover:border-purple-700  hover:border-opacity-30 h-full overflow-auto">
      <CardHeader>
        <CardTitle>Группы</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 flex-col">
          {groups.map((group) => (
            <GroupItem
              key={group.id}
              group={group}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
export default React.memo(AllGroupsCard);
