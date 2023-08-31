'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@xxx/ui-components/Card';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';
import { Avatar, AvatarFallback, AvatarImage } from '@xxx/ui-components/Avatar';
import AllGroupMenu from './AllGroupMenu';
import DeleteModal from './DeleteModal';
import { GroupType } from '@xxx/types/studentsGroup';

export default function AllGroupsCard(): JSX.Element {
  const groups = useAppSelector((state) => state.groups);
  const [selectedGr, setSelectedGr] = useState<GroupType | null>(null);

  return (
    <Card className="hover:border-cyan-50">
      <CardHeader>
        <CardTitle>Группы</CardTitle>
        <DeleteModal selectedGr={selectedGr} setSelectedGr={setSelectedGr} />
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 flex-col">
          {groups.map((group) => (
            <div key={group.id} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${group.name}`}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p className=" font-medium leading-none">{group.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Студентов: {group.students.length}
                  </p>
                </div>
              </div>
              <AllGroupMenu setSelectedGr={setSelectedGr} group={group} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
