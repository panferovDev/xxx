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
      <CardHeader>
        Расписание на неделю:
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          <li>Пн</li>
          <li>Вт</li>
          <li>Ср</li>
          <li>Чт</li>
          <li>Пт</li>
        </ul>
      </CardContent>
    </Card>
  );
}
