import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@xxx/ui-components/Card';
import { PersonIcon } from '@radix-ui/react-icons';

export default function DaysCard(): JSX.Element {
  return (
    <Card>
      <CardHeader>Расписание на неделю:</CardHeader>
      <div className="flex justify-start flex-col ml-3 mb-3 gap-1">
        <div>Пн</div>
        <div>Вт</div>
        <div>Ср</div>
        <div>Чт</div>
        <div>Пт</div>
      </div>
    </Card>
  );
}
