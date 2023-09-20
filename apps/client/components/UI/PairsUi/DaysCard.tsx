import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@xxx/ui-components/Card';

export default function DaysCard(): JSX.Element {
  return (
    <Card>
      <CardHeader>Расписание на неделю:</CardHeader>
      <div className="flex justify-center gap-6">
        <div className=" bg-purple-800 rounded-full p-3 mb-10 cursor-pointer">Пн</div>
      </div>
    </Card>
  );
}
