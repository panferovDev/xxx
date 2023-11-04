'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@xxx/ui-components/Card';
import { RadioGroup, RadioGroupItem } from '@xxx/ui-components/RadioGroup';
import { Skeleton } from '@xxx/ui-components/Skeleton';
import { Label } from '@xxx/ui-components/Label';
import usePairDays from '../../../hooks/usePairDays';

export default function DaysCard(): JSX.Element {
  const { pairDays, changeDayHandler } = usePairDays();
  return (
    <Card>
      <CardHeader>Расписание на неделю:</CardHeader>
      <CardContent>
        <div className="flex justify-start flex-col gap-2">
          {!pairDays.length
            ? Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-4 mt-2 w-full" />)
            : pairDays.map((day) => (
              <div key={day.id} className="flex flex-row items-center gap-4">
                <span>{day.dayName}</span>
                <RadioGroup disabled onValueChange={(value) => changeDayHandler(value, day.id)} defaultValue={day.dayType} className="flex flex-row">
                  <div className="flex  space-x-2">
                    <RadioGroupItem value="пары" id="r1" />
                    <Label htmlFor="r1">пары</Label>
                  </div>
                  <div className="flex  space-x-2">
                    <RadioGroupItem value="соло" id="r2" />
                    <Label htmlFor="r2">соло</Label>
                  </div>
                  <div className="flex  space-x-2">
                    <RadioGroupItem value="групповой" id="r3" />
                    <Label htmlFor="r3">групповой</Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
