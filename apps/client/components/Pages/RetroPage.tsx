import React from 'react';
import {
  Card, CardHeader, CardTitle, CardContent,
} from '@xxx/ui-components/Card';
import { Separator } from '@xxx/ui-components/Separator';
import { Users2 } from 'lucide-react';
import Groups from '../UI/RetroUi/Groups/Groups';
import Places from '../UI/RetroUi/Places/Places';

export default function RetroPage(): JSX.Element {
  return (
    <div className="flex gap-2 w-full">
      <div className="flex w-9/12">other</div>
      <div className="flex flex-col gap-2 w-3/12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm uppercase font-bold">Выбор групп:</CardTitle>
            <Users2 />
          </CardHeader>
          <CardContent>
            <Groups />
            <Separator className="my-7" />
            <Places />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
