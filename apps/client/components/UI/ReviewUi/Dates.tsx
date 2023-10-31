'use client';

import React, { useState, useEffect, use } from 'react';
import { Calendar } from '@xxx/ui-components/Calendar';
import { ru } from 'date-fns/locale';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

export type DatesProps = {
  setDays: (arr: string[]) => void;
};

export default function Dates({ setDays }: DatesProps): JSX.Element {
  const [dates, setDates] = useState<Date[] | undefined>([]);
  const choosenDates = useAppSelector((state) => state.review.days);
  useEffect(() => {
    if (choosenDates.length === 0 && dates?.length !== 0) {
      setDates([]);
    }
  }, [choosenDates]);
  
  useEffect(() => { 
    if (dates) {
      setDays(
        dates.map(
          (date) =>
            `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(
              2,
              '0',
            )}`,
        ),
      );
    }
  }, [dates]);

  return (
    <div className="flex flex-col gap-5 mt-2">
      <h3 className=" text-gray-400 ">Дни ревью:</h3>
      <Calendar
        mode="multiple"
        onSelect={setDates}
        selected={dates}
        locale={ru}
        className="rounded-md border"
      />
    </div>
  );
}
